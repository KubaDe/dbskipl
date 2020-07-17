import React, { useCallback, useEffect, useState } from 'react'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'

import PhotoModalContentWrapper from './PhotoModalContentWrapper'
import SlideShow from './SlideShow.motion'
import {
  Image,
  Wrapper,
  NextButton,
  PreviousButton,
  ImageWrapper,
  PadRight,
  PadLeft,
  ImageShadow,
  Thumbnails,
  Thumbnail,
} from './PhotoModal.styled'

const useKeyboardNavigate = (
  onNext: () => void,
  onPrevious: () => void,
): void => {
  const listener = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          onNext && onNext()
          break
        case 'ArrowLeft':
          onPrevious && onPrevious()
          break
      }
    },
    [onNext, onPrevious],
  )
  useEffect(() => {
    document?.addEventListener('keydown', listener)
    return () => {
      document?.removeEventListener('keydown', listener)
    }
  }, [listener])
}

import { InstagramPhoto } from 'hooks/useInstagramPhotos'

interface PhotoModalContentRelatedProps {
  close: () => void
  photo: InstagramPhoto
  nextPhoto: InstagramPhoto | null
  previousPhoto: InstagramPhoto | null
  setActivePhoto: (photo: InstagramPhoto | null) => void
}
type PhotoModalContentProps = PhotoModalContentRelatedProps
const PhotoModalContent: React.FC<PhotoModalContentProps> = (
  props: PhotoModalContentProps,
) => {
  const { close, photo, nextPhoto, previousPhoto, setActivePhoto } = props
  const [direction, setDirection] = useState(0)
  const [activeChildren, setActiveChildren] = useState(0)

  const onNext = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation()
      if (!nextPhoto) {
        return
      }
      setDirection(1)
      setActivePhoto(nextPhoto)
    },
    [nextPhoto],
  )
  const onPrevious = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation()
      if (!previousPhoto) {
        return
      }
      setDirection(-1)
      setActivePhoto(previousPhoto)
    },
    [previousPhoto],
  )

  useKeyboardNavigate(onNext, onPrevious)
  useEffect(() => {
    setActiveChildren(0)
  }, [photo])
  const src =
    (photo.children &&
      (photo.children.data[activeChildren].mediaUrl || photo.mediaUrl)) ||
    photo.mediaUrl ||
    ''
  return (
    <PhotoModalContentWrapper close={close}>
      {photo.children && (
        <Thumbnails>
          {photo.children.data.map((photo, i) => (
            <Thumbnail
              key={photo.mediaUrl}
              src={photo.mediaUrl}
              title="Gallery image"
              onClick={(e: MouseEvent) => {
                e.stopPropagation()
                setActiveChildren(i)
              }}
            />
          ))}s
        </Thumbnails>
      )}
      <Wrapper>
        <SlideShow
          onNext={onNext}
          onPrevious={onPrevious}
          index={photo.id}
          direction={direction}
        >
          <ImageWrapper>
            {nextPhoto && <PadRight onClick={onNext} />}
            {previousPhoto && <PadLeft onClick={onPrevious} />}
            <Image title={photo.caption} src={src} />
            <ImageShadow />
          </ImageWrapper>
        </SlideShow>
        {nextPhoto && (
          <NextButton onClick={onNext} icon={<BsFillCaretRightFill />} />
        )}
        {previousPhoto && (
          <PreviousButton onClick={onPrevious} icon={<BsFillCaretLeftFill />} />
        )}
      </Wrapper>
    </PhotoModalContentWrapper>
  )
}

export default PhotoModalContent

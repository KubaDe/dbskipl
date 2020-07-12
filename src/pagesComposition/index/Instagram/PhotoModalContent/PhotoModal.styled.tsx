import styled from 'styled-components'
import inject from 'hoc/inject'
import Img, { BaseImgProps } from 'components/simpleUi/Img'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Flex from 'components/simpleUi/Flex'
import IconButton from 'components/buttons/IconButton'

// Assets
import backgroundStripesSrc from '../assets/stripes.svg'

export const Wrapper = inject(Flex, {
  mt: 0,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
  height: { _: '100%', md: '80vh' },
  width: { _: '100%', md: '100%' },
})

export const Image = inject(Img, {
  maxWidth: { _: '100%', md: '70vw' },
  maxHeight: { _: 'auto', md: '80vh' },
  zIndex: 2,
  borderRadius: '25px',
})

export const ImageShadow = inject(Box, {
  position: 'absolute',
  background: `url("${backgroundStripesSrc}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  top: { _: 'md', md: 'md' },
  left: { _: 'md', md: 'mg' },
  width: '100%',
  height: '100%',
  zIndex: -1,
  borderRadius: '25px',
})

export const ImageWrapper = inject(Box, {
  position: 'relative',
})

const StyledPad = styled(Box)<BaseBoxProps>`
  cursor: pointer;
`

export const PadRight = inject(StyledPad, {
  position: 'absolute',
  right: 0,
  width: '50%',
  height: '100%',
  zIndex: 3,
})

export const PadLeft = inject(StyledPad, {
  position: 'absolute',
  left: 0,
  width: '50%',
  height: '100%',
  zIndex: 3,
})

const SwipeButton = inject(IconButton, {
  position: 'absolute',
  top: '50%',
  display: { _: 'none', lg: 'block' },
})

export const NextButton = inject(SwipeButton, {
  right: 0,
})

export const PreviousButton = inject(SwipeButton, {
  left: 0,
})

export const Thumbnails = inject(Flex, {
  position: 'absolute',
  bottom: 'lg',
  left: 0,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  px: '3xl',
})

const StyledThumbnail = styled(Img)<BaseImgProps>`
  cursor: pointer;
  transition: transform 0.2s;
  object-fit: cover;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(1.2);
  }
`

export const Thumbnail = inject(StyledThumbnail, {
  width: { _: 'md', md: 'lg' },
  height: { _: 'md', md: 'lg' },
  borderRadius: '50%',
  border: 'inverted',
  borderWidth: 'medium',
  m: '3xs',
  zIndex: 5,
})

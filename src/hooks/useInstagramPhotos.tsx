import { useMount } from 'react-use'
import { useState } from 'react'
import humps from 'humps'

const URL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,caption,permalink,children{media_url,thumbnail_url}&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`

enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  CAROUSEL_ALBUM = 'CAROUSEL_ALBUM',
}

export interface InstagramPhoto {
  id: string
  mediaType: MediaType
  mediaUrl?: string
  permalink?: string
  timestamp: string
  username: string
  caption: string
  children?: {
    data: {
      id: string
      mediaUrl: string
    }[]
  }
}

export interface InstagramPhotos {
  data: InstagramPhoto[]
}

const useInstagramPhotos = (): InstagramPhotos | null => {
  const [
    instagramPhotos,
    setInstagramPhotos,
  ] = useState<InstagramPhotos | null>(null)
  useMount(() => {
    ;(async () => {
      try {
        const response = await fetch(URL)
        const json = await response.json()
        setInstagramPhotos(humps.camelizeKeys(json) as unknown as InstagramPhotos)
      } catch (e) {
        console.error(e)
      }
    })()
  })
  return instagramPhotos
}

export default useInstagramPhotos

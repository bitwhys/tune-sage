import ytdl from "ytdl-core"
import fs from "fs"

type ThumbnailKey = "default" | "medium" | "high" | "standard" | "maxres"
type Snippet = {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Record<
    ThumbnailKey,
    {
      url: string
      width: number
      height: number
    }
  >
  channelTitle: string
  tags: [string]
  categoryId: string
  liveBroadcastContent: string
  defaultLanguage: string
  localized: {
    title: string
    description: string
  }
  defaultAudioLanguage: string
}
type VideoResponse = {
  kind: string
  etag: string
  items: Array<{
    kind: string
    etag: string
    id: string
    snippet: Snippet
  }>
}
export interface VideoDetails {
  id: string
  title: string
  channelTitle: string
  description: string
  thumbnail: string
  tags: string[]
}
export const getVideoDetails = async (videoId: string) => {
  const endpoint = `https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${process.env.PLASMO_PUBLIC_YOUTUBE_API_KEY}`
  console.log(endpoint)
  const response = await fetch(endpoint)
  const data = (await response.json()) as VideoResponse
  const [videoData] = data.items
  return {
    id: videoId,
    title: videoData.snippet.title,
    channelTitle: videoData.snippet.channelTitle,
    description: videoData.snippet.description,
    thumbnail:
      videoData.snippet.thumbnails.standard.url ??
      videoData.snippet.thumbnails.high.url,
    tags: videoData.snippet.tags
  }
}

const downloadVideoById = (videoId: string) => {
  ytdl("VIDEO_ID")
    .pipe(fs.createWriteStream(`$video-{videoId}.mp4`))
    .on("finish", () => console.log("Download complete"))
}

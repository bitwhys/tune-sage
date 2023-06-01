import { useEffect, useState } from "react"

const getVideoId = (url: string) => {
  const videoIDRegEx = new RegExp(/v=(\S{11})/)
  const matches = url.match(videoIDRegEx)
  const [_, video_id] = matches
  return video_id
}
export const useVideoId = () => {
  const [videoId, setVideoId] = useState("")
  useEffect(() => {
    chrome.tabs.query(
      {
        active: true
      },
      (tabs) => {
        const [activeTab] = tabs
        const regEx = new RegExp(/watch/)
        if (regEx.test(activeTab.url)) {
          setVideoId(getVideoId(activeTab.url))
        }
      }
    )
  }, [])
  return videoId
}

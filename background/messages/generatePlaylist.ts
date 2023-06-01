import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = `Fetched video for ${req.body.videoId}`

  res.send({
    message
  })
}

export default handler

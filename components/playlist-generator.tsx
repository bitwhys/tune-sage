import React, { useEffect, useState } from "react"
import { Lightning } from "@phosphor-icons/react"
import Slider from "~components/slider"
import Toggle from "~components/toggle"
import ChipGroup from "~components/chip-group"
import { getVideoDetails, type VideoDetails } from "~lib/youtube"
import * as Popover from "@radix-ui/react-popover"
import Chip from "~components/chip"

export type PlaylistGeneratorProps = {
  videoId: string
}

enum MoodModifiers {
  Calm = "Calm",
  Energetic = "Energetic",
  Joyful = "Joyful",
  Melancholic = "Melancholic",
  Focused = "Focused",
  Emotional = "Emotional",
  Inspiring = "Inspiring",
  Nostalgic = "Nostalgic",
  Peaceful = "Peaceful",
  Exciting = "Exciting"
}

const Moods = [
  MoodModifiers.Calm,
  MoodModifiers.Energetic,
  MoodModifiers.Joyful,
  MoodModifiers.Melancholic,
  MoodModifiers.Focused,
  MoodModifiers.Emotional,
  MoodModifiers.Inspiring,
  MoodModifiers.Nostalgic,
  MoodModifiers.Peaceful,
  MoodModifiers.Exciting
]

const moods = [
  {
    name: "Diverse",
    description:
      "Songs selected will be drastically different in their characteristics."
  },
  {
    name: "Somewhat Diverse",
    description:
      "Songs selected will have some noticeable differences, but still maintain some similarities."
  },
  {
    name: "Neutral",
    description:
      "Songs selected will have a mix of similarities and differences, providing a balanced playlist."
  },
  {
    name: "Somewhat Similar",
    description:
      "Songs selected will mostly share similar characteristics, with a few differences for variety."
  },
  {
    name: "Very Similar",
    description:
      "Songs selected will be very alike in their characteristics, providing a consistent listening experience."
  }
]
const PlaylistGenerator = ({ videoId }: PlaylistGeneratorProps) => {
  const [details, setDetails] = useState<VideoDetails>({})
  const [similarityScore, setSimilarityScore] = useState(2)
  const [activeMoods, setActiveMoods] = useState([
    MoodModifiers.Calm,
    MoodModifiers.Energetic
  ])

  const handleSetSimilarityScore = (value: number[]) => {
    const [score] = value
    setSimilarityScore(score)
  }

  function handleRemoveMoodModifier(mood: string) {
    setActiveMoods((v) => v.filter((m) => m !== mood))
  }
  const pingWorker = () => {}
  useEffect(() => {
    getVideoDetails(videoId).then((data) => {
      setDetails(data)
      console.log(`[debug- PlaylistGenerator]:\n`, data)
    })
  }, [videoId])

  function handleAddMoodModifier(mood: MoodModifiers) {
    if (activeMoods.length >= 2) return
    setActiveMoods((v) => [...v, mood])
  }

  return (
    <div>
      <header>
        <div className="relative block aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={details.thumbnail}
            alt=""
            className="inset-0 object-cover"
          />
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2 className="line-clamp-2 text-sm font-medium">
              <span className="sr-only">Details for </span>
              {details.title}
            </h2>
            <p className="text-sm font-medium text-subtle">
              {details.channelTitle}
            </p>
          </div>
          <button
            onClick={pingWorker}
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-transparent text-neutral-10
            hover:bg-neutral-5 hover:text-on-canvas focus:outline-none">
            <Lightning size={24} />
            <span className="sr-only">Favorite</span>
          </button>
        </div>
      </header>
      <main className="mt-4 space-y-2 border-t border-neutral-7 pt-2">
        <div className="text-sm">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-semibold leading-7 text-white">Similarity</h2>
            <span className="font-semibold uppercase tracking-wider text-primary-9">
              {moods[similarityScore].name}
            </span>
          </div>
          <p className="mb-2 mt-1 h-[4.5rem] leading-6 text-subtle">
            {moods[similarityScore].description}
          </p>
          <Slider
            value={[similarityScore]}
            onValueChange={handleSetSimilarityScore}
            min={0}
            max={4}
          />
        </div>
        <div className="text-sm">
          <h3 className="font-medium">Playlist options</h3>
          <dl className="mt-2 divide-y divide-neutral-7 border-b border-t border-neutral-7">
            <div className="flex justify-between py-3 font-medium">
              <dt className="text-xs text-subtle">Exclude Vocals</dt>
              <dd className="whitespace-nowrap">
                <Toggle />
              </dd>
            </div>
            <Popover.Root>
              <div className="flex justify-between py-3 font-medium">
                <Popover.Trigger className="text-xs leading-6 text-subtle">
                  Mood
                </Popover.Trigger>
                <div className="whitespace-nowrap">
                  <ChipGroup
                    value={activeMoods}
                    onValueChange={handleRemoveMoodModifier}
                  />
                </div>
                <Popover.Portal>
                  <Popover.Content
                    sideOffset={8}
                    className="ml-2 w-[calc(300px-40px)] rounded bg-canvas p-3 ring-1 ring-neutral-8 focus:outline-none">
                    <div className="grid w-full grid-cols-2 gap-2">
                      {Moods.map((mood) => (
                        <button
                          onClick={() => handleAddMoodModifier(mood)}
                          className="grid focus:outline-none"
                          disabled={activeMoods.length >= 2}>
                          <Chip label={mood} />
                        </button>
                      ))}
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </div>
            </Popover.Root>
          </dl>
        </div>
      </main>
    </div>
  )
}

export default PlaylistGenerator

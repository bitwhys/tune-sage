import React, { useState } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import {
  DotsThree,
  SpotifyLogo,
  YoutubeLogo,
  DotsSixVertical
} from "@phosphor-icons/react"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

export type PlaylistItemProps = {
  id: string
}
const variants = {
  expanded: { height: "auto" },
  collapsed: { height: 0 }
}

const PlaylistItem = ({ id }: PlaylistItemProps) => {
  // const [expanded, setExpanded] = useState(false)
  return (
    <AccordionPrimitive.Item
      value={id}
      className="rouned group flex  flex-col py-2">
      <div
        className="group  flex items-center justify-between rounded-t border-b border-transparent p-1.5 ring-1 ring-transparent
          group-data-[state=open]:bg-neutralDark-5 group-data-[state=open]:ring-neutralDark-8
          group-data-[state=open]:[&_#song-meta]:text-neutralDark-11
          group-data-[state=open]:[&_#song-title]:text-neutralDark-12">
        <AccordionPrimitive.Trigger className="mr-4 flex grow flex-col text-left  group-hover:[&_#song-title]:text-neutralDark-11">
          <h4 id="song-title" className="text-sm font-medium">
            {id}
          </h4>
          <div id="song-meta" className="mt-1 text-sm text-neutralDark-9">
            <span>Business</span> • <time>18 Nov 2022</time>
          </div>
        </AccordionPrimitive.Trigger>
        <DotsSixVertical
          className="h-6 w-6 text-neutralDark-10"
          weight="duotone"
        />
      </div>
      <AccordionPrimitive.Content className="-mx-px rounded-b-md bg-neutralDark-1 px-1.5 py-3 ring-1 ring-inset ring-neutralDark-8 transition-all data-[state=closed]:animate-accordion-up  data-[state=open]:animate-accordion-down">
        <motion.div>
          <div className="flex w-full items-center justify-between gap-x-2">
            <span className="text-medium text-neutralDark-11">Save Song</span>
            <span className="isolate inline-flex">
              <button
                type="button"
                className="relative inline-flex items-center rounded px-2 py-2  hover:bg-positiveDark-4  focus:z-10">
                <span className="sr-only">Previous</span>
                <SpotifyLogo
                  className="h-5 w-5 text-positiveDark-9"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded px-2 py-2   hover:bg-destructiveDark-4 focus:z-10">
                <span className="sr-only">Next</span>
                <YoutubeLogo
                  className="h-5 w-5 text-destructiveDark-9"
                  aria-hidden="true"
                />
              </button>
            </span>
          </div>
          <div className="mt-12 flex w-full items-center justify-end divide-x divide-neutralDark-6 text-xs">
            <button className="text-semibold px-1.5 tracking-wider text-neutralDark-11 hover:text-neutralDark-12">
              Play next
            </button>
            <button className="text-semibold px-1.5 tracking-wider text-neutralDark-11 hover:text-primaryDark-10">
              Emphasize
            </button>
            <button className="text-semibold px-1.5 tracking-wider text-neutralDark-11 hover:text-destructiveDark-10">
              Remove
            </button>
          </div>
        </motion.div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

export default PlaylistItem

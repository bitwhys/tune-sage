import React, { useState } from "react"
import clsx from "clsx"
import {
  SkipBack,
  SkipForward,
  PlayCircle,
  PauseCircle,
  Play,
  Pause,
  ListBullets,
  Lightning,
  Gear
} from "@phosphor-icons/react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { AnimatePresence, motion } from "framer-motion"

export type ToolbarProps = {
  isPlaying: boolean
  onPlay?: any
  onPause?: any
  onSkipBack?: any
  onSkipForward?: any
  onClickMore?: any
}
const variants = {
  expanded: {
    height: 240,
    transition: { ease: "", stiffness: 120, damping: 16, mass: 1.25 }
  },
  collapsed: {
    height: 0,
    transition: {
      ease: "anticipate"
    }
  }
}

const Toolbar = ({
  isPlaying,
  onPlay,
  onPause,
  onSkipForward,
  onSkipBack,
  onClickMore
}: ToolbarProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <CollapsiblePrimitive.Root
      open={expanded}
      onOpenChange={setExpanded}
      className="shrink-0 p-3">
      <div className="flex w-full items-center justify-between">
        <button className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
          <svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <div className="flex items-center justify-end gap-x-2.5 divide-x divide-neutralDark-7">
          <button className="group grid h-8 w-8 items-center justify-center px-5">
            <SkipBack
              weight="duotone"
              size={24}
              className="h-full text-neutralDark-11 group-hover:text-neutralDark-12"
            />
          </button>
          <button className="group grid h-8 w-8 items-center justify-center px-5">
            {isPlaying ? (
              <Pause
                weight="duotone"
                className="h-6 w-6 text-primaryDark-9 group-hover:text-primaryDark-10"
              />
            ) : (
              <Play
                weight="duotone"
                className="h-6 w-6  text-neutralDark-11 group-hover:text-neutralDark-12"
              />
            )}
          </button>
          <button className="group grid h-8 w-8 items-center justify-center px-5">
            <SkipForward
              weight="duotone"
              className="h-6 w-6 text-neutralDark-11 group-hover:text-neutralDark-12"
            />
          </button>
          <CollapsiblePrimitive.Trigger className="group grid h-8 w-8 items-center justify-center px-5">
            <Lightning
              weight="duotone"
              className="h-6 w-6 text-neutralDark-11 group-hover:text-infoDark-10
                group-data-[state=open]:text-infoDark-10"
            />
          </CollapsiblePrimitive.Trigger>
          <button className="group grid h-8 w-8 items-center justify-center px-5">
            <ListBullets
              weight="duotone"
              className="h-6 w-6 text-neutralDark-11 group-hover:text-neutralDark-12"
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <CollapsiblePrimitive.Content
            forceMount
            className="relative bg-neutralDark-3">
            <motion.div
              variants={variants}
              animate={expanded ? "expanded" : "collapsed"}
              exit="collapsed">
              <div className="pt-3"></div>
            </motion.div>
          </CollapsiblePrimitive.Content>
        )}
      </AnimatePresence>
    </CollapsiblePrimitive.Root>
  )
}

export default Toolbar

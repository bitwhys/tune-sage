import React from "react"
import * as Switch from "@radix-ui/react-switch/dist"

export type ToggleProps = {}

const Toggle = ({}: ToggleProps) => {
  return (
    <Switch.Root
      className="relative h-5 w-10 cursor-default rounded-full
         bg-muted  outline-none data-[state=checked]:bg-primary"
      id="airplane-mode"
      style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}>
      <Switch.Thumb
        className="block h-4 w-4 translate-x-0
            rounded-full bg-neutral-12 transition-transform will-change-transform duration-100
            data-[state=checked]:translate-x-5"
      />
    </Switch.Root>
  )
}

export default Toggle

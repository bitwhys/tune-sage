import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider/dist"

export type SliderProps = {}

const Slider = ({ ...props }: SliderPrimitive.SliderProps) => (
  <form>
    <SliderPrimitive.Root
      className="relative flex h-5 w-full touch-none select-none items-center"
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}>
      <SliderPrimitive.Track className="bg-blackA10 relative h-[3px] grow rounded-full">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-r from-primary-6 to-primary-10" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="hover:bg-violet3  focus:shadow-blackA8 block h-5 w-5 rounded-[10px] bg-white
          shadow-[0_2px_10px] shadow-primary-6 focus:shadow-[0_0_0_5px] focus:shadow-primary-9 focus:outline-none"
        aria-label="Volume"
      />
    </SliderPrimitive.Root>
  </form>
)

export default Slider

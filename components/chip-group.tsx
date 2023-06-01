import React from "react"
import Chip from "~components/chip"

export type ChipGroupProps = {
  value: string[]
  onValueChange: (p: any) => void
}

const ChipGroup = ({ value, onValueChange }: ChipGroupProps) => (
  <span className="inline-flex items-center gap-x-1.5">
    {value.map((mood) => (
      <Chip label={mood} removable={true} onRemove={onValueChange} />
    ))}
  </span>
)

export default ChipGroup

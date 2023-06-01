import React from "react"

export type ChipProps = {
  label: string
  removable?: boolean
  onRemove?: (label: string) => void
}
const Chip = ({ label, removable = false, onRemove }: ChipProps) => (
  <span
    className="inline-flex items-center justify-between gap-x-0.5 rounded-md bg-primary-1 px-2 py-1 text-center
      text-xs font-medium text-on-primary-muted ring-1 ring-inset
      ring-primary-5 hover:bg-primary-3 hover:text-primary-9 hover:ring-primary-9">
    {label}
    {removable && (
      <button
        onClick={() => onRemove(label)}
        type="button"
        className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-primary-5">
        <span className="sr-only">Remove</span>
        <svg
          viewBox="0 0 14 14"
          className="h-3.5 w-3.5 stroke-primary-8 group-hover:stroke-primary-10">
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span className="absolute -inset-1" />
      </button>
    )}
  </span>
)

export default Chip

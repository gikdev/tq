import { CheckIcon, ExclamationMarkIcon, InfoIcon, WarningIcon, XIcon } from "@phosphor-icons/react"
import type { ReactNode } from "react"
import { cn } from "#/shared/helpers"

interface NoteBlockProps {
  status?: "error" | "warning" | "success" | "info" | "neutral"
  children?: ReactNode
  title: string
}

export default function NoteBlock({ children, title, status = "neutral" }: NoteBlockProps) {
  const parentClasses = cn("border p-2 rounded-md flex flex-col gap-2", {
    "bg-slate-3 border-slate-7 text-slate-11": status === "neutral",
    "bg-red-3 border-red-7 text-red-11": status === "error",
    "bg-blue-3 border-blue-7 text-blue-11": status === "info",
    "bg-green-3 border-green-7 text-green-11": status === "success",
    "bg-yellow-3 border-yellow-7 text-yellow-11": status === "warning",
  })
  const headerClasses = cn("flex gap-1 items-center font-bold", {
    "text-slate-12": status === "neutral",
    "text-red-12": status === "error",
    "text-blue-12": status === "info",
    "text-green-12": status === "success",
    "text-yellow-12": status === "warning",
  })

  const IconToRender = (() => {
    if (status === "error") return XIcon
    if (status === "success") return CheckIcon
    if (status === "warning") return WarningIcon
    if (status === "info") return InfoIcon
    return ExclamationMarkIcon
  })()

  return (
    <div className={parentClasses}>
      <div className={headerClasses}>
        <IconToRender size={24} />
        <p>{title}</p>
      </div>

      {children ? <div className="">{children}</div> : null}
    </div>
  )
}

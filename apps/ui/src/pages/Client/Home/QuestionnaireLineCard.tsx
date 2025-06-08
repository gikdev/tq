import styled from "@master/styled.react"
import { CaretLeftIcon } from "@phosphor-icons/react"
import { Link } from "react-router"
import { cn } from "#/shared/helpers"

interface QuestionnaireLineCardProps {
  name: string
  to: string
  isLast?: boolean
}

export function QuestionnaireLineCard({ name, to, isLast = false }: QuestionnaireLineCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 hover:bg-slate-3 p-3 cursor-pointer",
        isLast ? "" : "border-b border-slate-7",
      )}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-green-8 to-blue-8 rounded-full" />

      <p className="flex-1">{name}</p>

      <CaretLeftIcon size={20} />
    </Link>
  )
}

export const QuestionnaireLineCardContainer = styled.div`
  flex flex-col bg-slate-2 border border-slate-7 rounded-md overflow-hidden
`

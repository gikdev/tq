import { Outlet, useParams } from "react-router"
import NotFoundAlert from "./NotFoundAlert"
import { questionnaires } from "#/assets/traps"
import { type PropsWithChildren, type ReactNode } from "react"
import { cn } from "#/shared/helpers"

export default function TestByIdLayout() {
  const testId = useParams().testId
  if (!testId) return <NotFoundAlert />

  const selectedQuestionnaire = questionnaires.find(q => q.id === testId)
  if (!selectedQuestionnaire) return <NotFoundAlert />

  return (
    <div className="flex flex-col h-dvh">
      <div className="p-2 border-b border-slate-6">
        <h1 className="text-slate-12 font-bold text-center text-2xl">
          {selectedQuestionnaire.title}
        </h1>
      </div>

      <Outlet />
    </div>
  )
}

export function BtnContainer({ children }: PropsWithChildren) {
  return children ? (
    <footer className="grid grid-cols-2 gap-2 p-2 border-t border-slate-6">{children}</footer>
  ) : null
}

interface ContentContainerProps {
  children?: ReactNode
  className?: string
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return <div className={cn("flex-1 overflow-y-auto p-2", className)}>{children}</div>
}

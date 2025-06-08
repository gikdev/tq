import { XIcon } from "@phosphor-icons/react"
import { useAtom } from "jotai"
import type { ReactNode } from "react"
import { Btn } from "#/components/Btn"

interface AlertProps {
  children: ReactNode
  title: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  atom: any
}

export default function Alert({ children, title, atom }: AlertProps) {
  const [isShown, setShown] = useAtom(atom)

  if (!isShown) return null

  return (
    <div className="bg-amber-3 text-amber-11 p-2 border border-amber-7 rounded-md">
      <div className="flex items-center justify-between">
        <p className="font-bold text-amber-12">{title}</p>

        <Btn type="button" onClick={() => setShown(false)} className="h-8 w-8 p-1">
          <XIcon size={20} />
        </Btn>
      </div>

      {children}
    </div>
  )
}

import styled from "@master/styled.react"
import { CheckCircleIcon, CircleDashedIcon } from "@phosphor-icons/react"

interface AnswerItemProps<TValue = string> {
  answerText: string
  answerCode: TValue
  currentQIdx: number
  currentValue: TValue
  setCurrentValue: (idx: number, newValue: TValue) => void
}

export default function AnswerItem<TValue = string>({
  currentValue,
  answerCode,
  answerText,
  currentQIdx,
  setCurrentValue,
}: AnswerItemProps<TValue>) {
  const isActive = answerCode === currentValue

  const StyledItem = styled.label(
    "flex items-center gap-1 transition-all",
    "rounded-md px-3 py-2 cursor-pointer",
    isActive ? "text-jade-11 bg-jade-3 hover:bg-jade-4" : "hover:bg-slate-3 text-slate-11",
  )

  return (
    <StyledItem>
      <input
        className="sr-only"
        type="radio"
        checked={isActive}
        onChange={() => setCurrentValue(currentQIdx, answerCode)}
      />
      <span className="me-auto">{answerText}</span>
      {isActive ? <CheckCircleIcon size={24} /> : <CircleDashedIcon size={24} />}
    </StyledItem>
  )
}

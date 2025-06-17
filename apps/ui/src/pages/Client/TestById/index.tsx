import styled from "@master/styled.react"
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { useParams } from "react-router"
import { type Answer, type Questionnaire, questionnaires } from "#/assets/traps"
import { Btn } from "#/components/Btn"
import { Title } from "#/components/Title"
import NotFoundAlert from "./NotFoundAlert"

export default function TestById() {
  const testId = useParams().testId
  if (!testId) return <NotFoundAlert />

  const selectedQuestionnaire = questionnaires.find(q => q.id === testId)
  if (!selectedQuestionnaire) return <NotFoundAlert />

  return (
    <div className="flex flex-col min-h-dvh p-4 gap-5">
      <Title>{selectedQuestionnaire.title}</Title>

      <QuestionnaireBox questionnaire={selectedQuestionnaire} />
    </div>
  )
}

interface QuestionnaireBoxProps {
  questionnaire: Questionnaire
}

function QuestionnaireBox({ questionnaire }: QuestionnaireBoxProps) {
  const [currentQIdx, setCurrentQIdx] = useState(0)

  const currentQ = questionnaire.questions[currentQIdx]

  return (
    <div className="bg-slate-2 border border-slate-6 rounded-md p-4 flex flex-col gap-5">
      <p className="font-bold text-slate-12">{currentQ.query}</p>

      <div className="flex flex-col gap-1">
        {currentQ.answers.map(a => (
          <AnswerItem
            key={a.id}
            answerCode={a.code}
            answerText={a.text}
            currentQId={currentQ.id}
            currentValue={1}
            questionnaireId={questionnaire.id}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Btn className="flex-1 flex items-center gap-1 justify-between">
          <ArrowRightIcon size={24} />
          <span>قبلی</span>
        </Btn>

        <Btn
          className="flex-1 flex items-center gap-1 justify-between"
          themeType="filled"
          theme="primary"
          onClick={() => setCurrentQIdx(p => p + 1)}
        >
          <span>بعدی</span>
          <ArrowLeftIcon size={24} />
        </Btn>
      </div>
    </div>
  )
}

interface AnswerItemProps<T = unknown> {
  answerText: Answer<T>["text"]
  answerCode: Answer<T>["code"]
  questionnaireId: Questionnaire["id"]
  currentQId: number
  currentValue: Answer<T>["code"]
}

function AnswerItem<T = unknown>({
  currentValue,
  answerCode,
  answerText,
  currentQId,
  questionnaireId,
}: AnswerItemProps<T>) {
  const isActive = answerCode === currentValue

  const StyledItem = styled.label(
    "flex items-center gap-1 transition-all",
    "hover:bg-slate-3 rounded-md px-3",
    "py-2 cursor-pointer accent-jade-9",
    isActive ? "text-jade-11 bg-slate-3 hover:bg-slate-4" : "",
  )

  return (
    <StyledItem>
      <input className="sr-only" type="radio" name={`${questionnaireId}-${currentQId}`} />
      <span className="me-auto">{answerText}</span>
      {isActive && <CheckCircleIcon size={24} />}
    </StyledItem>
  )
}

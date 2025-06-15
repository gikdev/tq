import { useParams } from "react-router"
import { type Questionnaire, questionnaires } from "#/assets/traps"
import { Title } from "#/components/Title"
import NotFoundAlert from "./NotFoundAlert"
import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Btn } from "#/components/Btn"

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

  // return questionnaire.questions.length
  return (
    <div className="bg-slate-2 border border-slate-6 rounded-md p-4 flex flex-col gap-5">
      <p className="font-bold text-slate-12">{currentQ.query}</p>

      <div className="flex flex-col gap-1">
        {currentQ.answers.map(a => (
          <label
            key={a.id}
            className="flex items-center gap-1 transition-all hover:bg-slate-3 rounded-md px-2 py-1 cursor-pointer accent-jade-9"
          >
            <input type="radio" name={`${questionnaire.id}-${currentQ.id}`} />
            <span>{a.text}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Btn className="flex-1 flex items-center gap-1 justify-between">
          <ArrowRightIcon size={24} />
          <span>قبلی</span>
        </Btn>

        <Btn className="flex-1 flex items-center gap-1 justify-between" themeType="filled" theme="primary" onClick={() => setCurrentQIdx(p => p+1)}>
          <span>بعدی</span>
          <ArrowLeftIcon size={24} />
        </Btn>
      </div>
    </div>
  )
}

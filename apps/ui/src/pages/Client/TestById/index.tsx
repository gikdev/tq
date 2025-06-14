import { useParams } from "react-router"
import { type Questionnaire, questionnaires } from "#/assets/traps"
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
  return questionnaire.questions.length
}

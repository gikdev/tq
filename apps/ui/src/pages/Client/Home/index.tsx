import { atomWithStorage } from "jotai/utils"
import { questionnaires } from "#/assets/traps"
import { Title } from "#/components/Title"
import Alert from "./Alert"
import Nav from "./Nav"
import { QuestionnaireLineCard, QuestionnaireLineCardContainer } from "./QuestionnaireLineCard"
import VersionTag from "./VersionTag"

const oneTimeAlertAtom = atomWithStorage("ALERT_ONE_TIME", true)

export default function ClientHome() {
  return (
    <div className="flex flex-col min-h-dvh p-4 gap-5">
      <Nav />

      <Alert atom={oneTimeAlertAtom} title="فقط یکبار فرصت دارید!">
        <p>
          با توجه به محدودیت‌های فنی، در نسخه <code>v0.x</code> فقط یکبار میتوانید به هر پرسش‌نامه
          پاسخ دهید!
        </p>
      </Alert>

      <div className="flex flex-col">
        <Title>پرسش‌نامه‌ها</Title>

        <QuestionnaireLineCardContainer>
          {questionnaires.map((q, i) => (
            <QuestionnaireLineCard
              key={q.id}
              to={q.to}
              name={q.title}
              isLast={questionnaires.length - 1 === i}
            />
          ))}
        </QuestionnaireLineCardContainer>
      </div>

      <VersionTag />
    </div>
  )
}

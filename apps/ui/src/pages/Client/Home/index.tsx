import styled from "@master/styled.react"
import { atomWithStorage } from "jotai/utils"
import { trapQuestionnaires } from "#/assets/traps"
import Alert from "./Alert"
import Nav from "./Nav"
import { QuestionnaireLineCard, QuestionnaireLineCardContainer } from "./QuestionnaireLineCard"
import VersionTag from "./VersionTag"

const oneTimeAlertAtom = atomWithStorage("ALERT_ONE_TIME", true)

const Title = styled.h1`text-center font-black text-slate-12 text-3xl border-b border-slate-6 max-w-max mx-auto pb-3 mb-5`

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
          {trapQuestionnaires.map((t, i) => (
            <QuestionnaireLineCard
              key={t.id}
              to={t.to}
              name={t.title}
              isLast={trapQuestionnaires.length - 1 === i}
            />
          ))}
        </QuestionnaireLineCardContainer>
      </div>

      <VersionTag />
    </div>
  )
}

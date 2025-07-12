import { ArrowLeftIcon, ArrowRightIcon, EyeIcon } from "@phosphor-icons/react"
import { useAtom } from "jotai"
import { useCallback, useState } from "react"
import { Link, useParams } from "react-router"
import {
  answersAtom,
  type PrecisionAnswer,
  type PrecisionAnswerCode,
  questionnaires,
} from "#/assets/traps"
import { Btn } from "#/components/Btn"
import routes from "#/pages/routes"
import AnswerItem from "../_shared/AnswerItem"
import { BtnContainer, ContentContainer } from "../_shared/Layout"
import NotFoundAlert from "../_shared/NotFoundAlert"
import QuestionBox from "../_shared/QuestionBox"

export default function TestByIdTest() {
  const testId = useParams().testId
  const selectedQuestionnaire = questionnaires.find(q => q.id === testId)
  if (!testId) throw new Error("`testId` is falsy!")
  if (!selectedQuestionnaire) throw new Error("`selectedQuestionnaire` is falsy!")

  const { questions } = selectedQuestionnaire
  const [answersObj, setAnswersObj] = useAtom(answersAtom)
  const answers = answersObj[selectedQuestionnaire.id].split(",").map(Number) ?? []
  const [currentQIdx, setCurrentQIdx] = useState(0)
  const currentQ = questions[currentQIdx]
  const currentValue = answers[currentQIdx]

  const handlePrevBtnClick = useCallback(() => {
    setCurrentQIdx(p => p - 1)
  }, [])

  const handleNextBtnClick = useCallback(() => {
    setCurrentQIdx(p => p + 1)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const setCurrentValue = useCallback(
    (idx: number, newValue: PrecisionAnswer["code"]) => {
      const duplicate = [...answers]
      duplicate[idx] = newValue
      setAnswersObj(p => ({
        ...p,
        [selectedQuestionnaire.id]: duplicate.join(","),
      }))
    },
    [answers, selectedQuestionnaire.id],
  )

  if (!testId || !selectedQuestionnaire) return <NotFoundAlert />

  return (
    <>
      <ContentContainer>
        <QuestionBox questionNumber={currentQIdx + 1} questionText={currentQ.query}>
          {currentQ.answers.map(a => (
            <AnswerItem
              key={a.id}
              answerCode={a.code}
              answerText={a.text}
              currentQIdx={currentQIdx}
              currentValue={currentValue as PrecisionAnswerCode}
              setCurrentValue={setCurrentValue}
            />
          ))}
        </QuestionBox>
      </ContentContainer>

      <BtnContainer>
        {currentQIdx < 1 ? (
          <Btn
            className="flex items-center gap-1 justify-between"
            as={Link}
            to={routes.client_testById_home(testId)}
          >
            <ArrowRightIcon size={24} />
            <span>بازگشت</span>
          </Btn>
        ) : (
          <Btn className="flex items-center gap-1 justify-between" onClick={handlePrevBtnClick}>
            <ArrowRightIcon size={24} />
            <span>قبلی</span>
          </Btn>
        )}

        {currentQIdx < questions.length - 1 ? (
          <Btn
            className="flex items-center gap-1 justify-between"
            themeType="filled"
            theme="primary"
            onClick={handleNextBtnClick}
            disabled={currentValue === 0}
          >
            <span>بعدی</span>
            <ArrowLeftIcon size={24} />
          </Btn>
        ) : (
          <Btn
            className="flex items-center gap-1 justify-between"
            themeType="filled"
            theme="primary"
            as={Link}
            to={routes.client_testById_result(testId)}
          >
            <span>مشاهده نتیجه</span>
            <EyeIcon size={24} />
          </Btn>
        )}
      </BtnContainer>
    </>
  )
}

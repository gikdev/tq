import type { ReactNode } from "react"

interface QuestionBoxProps {
  questionNumber: number
  questionText: string
  children: ReactNode
}

export default function QuestionBox({ children, questionNumber, questionText }: QuestionBoxProps) {
  // const [currentQIdx, setCurrentQIdx] = useState(0)
  // const currentQ = questions[currentQIdx]
  // const [answerSlots, setAnswerSlots] = useState(Array(questions.length).fill(0))
  // const currentValue = answerSlots[currentQIdx]

  // const setCurrentValue = useCallback(
  //   (idx: number, newValue: Answer<T>["code"]) => {
  //     const duplicate = [...answerSlots]
  //     duplicate[idx] = newValue
  //     setAnswerSlots([...duplicate])
  //   },
  //   [answerSlots],
  // )

  return (
    <div className="bg-slate-2 border border-slate-6 rounded-md p-4 flex flex-col gap-5">
      <p className="font-bold text-slate-12">
        {questionNumber}. {questionText}
      </p>

      <div className="flex flex-col gap-1">
        {/* {currentQ.answers.map(a => (
          <AnswerItem<T>
            key={a.id}
            answerCode={a.code}
            answerText={a.text}
            currentQIdx={currentQIdx}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        ))} */}
        {children}
      </div>
    </div>
  )
}

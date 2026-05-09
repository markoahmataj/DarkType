import { GenericQuizPage } from '@/components/GenericQuizPage'
import { manipulationStyleQuestions } from '@/lib/manipulation-style-data'

const resultTypes = ['charmer', 'strategist', 'guiltmaker', 'withholder', 'performer', 'pressurepoint']

export default function ManipulationStyleTestPage() {
  return (
    <GenericQuizPage
      questions={manipulationStyleQuestions}
      resultTypes={resultTypes}
      resultPath="/result/manipulation-style-test"
      testSlug="manipulation-style-test"
    />
  )
}

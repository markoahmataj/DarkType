import { GenericQuizPage } from '@/components/GenericQuizPage'
import { toxicPatternQuestions } from '@/lib/toxic-pattern-data'

const resultTypes = ['saboteur', 'controller', 'pleaser', 'accuser', 'withholder', 'escapist']

export default function ToxicPatternTestPage() {
  return (
    <GenericQuizPage
      questions={toxicPatternQuestions}
      resultTypes={resultTypes}
      resultPath="/result/toxic-pattern-test"
      testSlug="toxic-pattern-test"
    />
  )
}

import { GenericQuizPage } from '@/components/GenericQuizPage'
import { emotionalTriggerQuestions } from '@/lib/emotional-trigger-data'

const resultTypes = ['rejection', 'control', 'disrespect', 'abandonment', 'exposure', 'injustice']

export default function EmotionalTriggerTestPage() {
  return (
    <GenericQuizPage
      questions={emotionalTriggerQuestions}
      resultTypes={resultTypes}
      resultPath="/result/emotional-trigger-test"
      testSlug="emotional-trigger-test"
    />
  )
}

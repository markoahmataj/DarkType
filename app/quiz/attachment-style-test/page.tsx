import { GenericQuizPage } from '@/components/GenericQuizPage'
import { attachmentStyleQuestions } from '@/lib/attachment-style-data'

const resultTypes = ['anchor', 'clinger', 'fortress', 'runner', 'pushpull', 'watcher']

export default function AttachmentStyleTestPage() {
  return (
    <GenericQuizPage
      questions={attachmentStyleQuestions}
      resultTypes={resultTypes}
      resultPath="/result/attachment-style-test"
      testSlug="attachment-style-test"
    />
  )
}

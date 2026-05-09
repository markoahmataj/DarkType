import { Suspense } from 'react'
import { GenericTestResultClient } from '@/components/GenericTestResultClient'
import { attachmentStyleResultTypes } from '@/lib/attachment-style-data'

const validTypes = ['anchor', 'clinger', 'fortress', 'runner', 'pushpull', 'watcher']

export default function AttachmentStyleResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-[#555] text-sm">Loading...</div>
      </main>
    }>
      <GenericTestResultClient
        testSlug="attachment-style-test"
        testName="Attachment Style Test"
        resultTypesData={attachmentStyleResultTypes}
        validTypes={validTypes}
      />
    </Suspense>
  )
}

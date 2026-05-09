import { Suspense } from 'react'
import { GenericTestResultClient } from '@/components/GenericTestResultClient'
import { emotionalTriggerResultTypes } from '@/lib/emotional-trigger-data'

const validTypes = ['rejection', 'control', 'disrespect', 'abandonment', 'exposure', 'injustice']

export default function EmotionalTriggerResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-[#555] text-sm">Loading...</div>
      </main>
    }>
      <GenericTestResultClient
        testSlug="emotional-trigger-test"
        testName="Emotional Trigger Test"
        resultTypesData={emotionalTriggerResultTypes}
        validTypes={validTypes}
      />
    </Suspense>
  )
}

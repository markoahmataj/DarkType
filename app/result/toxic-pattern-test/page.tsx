import { Suspense } from 'react'
import { GenericTestResultClient } from '@/components/GenericTestResultClient'
import { toxicPatternResultTypes } from '@/lib/toxic-pattern-data'

const validTypes = ['saboteur', 'controller', 'pleaser', 'accuser', 'withholder', 'escapist']

export default function ToxicPatternResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-[#555] text-sm">Loading...</div>
      </main>
    }>
      <GenericTestResultClient
        testSlug="toxic-pattern-test"
        testName="Toxic Pattern Test"
        resultTypesData={toxicPatternResultTypes}
        validTypes={validTypes}
      />
    </Suspense>
  )
}

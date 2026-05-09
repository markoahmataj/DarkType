import { Suspense } from 'react'
import { GenericTestResultClient } from '@/components/GenericTestResultClient'
import { manipulationStyleResultTypes } from '@/lib/manipulation-style-data'

const validTypes = ['charmer', 'strategist', 'guiltmaker', 'withholder', 'performer', 'pressurepoint']

export default function ManipulationStyleResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-[#555] text-sm">Loading...</div>
      </main>
    }>
      <GenericTestResultClient
        testSlug="manipulation-style-test"
        testName="Manipulation Style Test"
        resultTypesData={manipulationStyleResultTypes}
        validTypes={validTypes}
      />
    </Suspense>
  )
}

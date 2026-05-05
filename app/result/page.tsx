import { Suspense } from 'react'
import { ResultClient } from '@/components/ResultClient'

export default function ResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-[#555] text-sm">Loading...</div>
      </main>
    }>
      <ResultClient />
    </Suspense>
  )
}

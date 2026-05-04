import { Suspense } from 'react'
import { ResultClient } from '@/components/ResultClient'

export default function ResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-lg">Loading...</div>
        </div>
      </main>
    }>
      <ResultClient />
    </Suspense>
  )
}

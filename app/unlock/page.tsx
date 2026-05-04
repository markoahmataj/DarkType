import { reports, type FullReport } from '@/lib/report-data'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import Link from 'next/link'
import { SuccessClient } from '@/components/SuccessClient'

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

interface UnlockPageProps {
  searchParams: Promise<{ ref?: string }>
}

export default async function UnlockPage({ searchParams }: UnlockPageProps) {
  const { ref } = await searchParams

  if (!ref) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Invalid Request</h1>
          <p className="text-gray-400 mb-8">No report type found.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const resultType = ref as ResultType
  if (!validTypes.includes(resultType)) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Invalid Result Type</h1>
          <p className="text-gray-400 mb-8">Something went wrong.</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const report = reports[resultType]
  const displayName = resultTypes[resultType].displayName

  return <SuccessClient report={report} displayName={displayName} />
}

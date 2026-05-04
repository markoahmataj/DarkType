import { Stripe } from 'stripe'
import { reports, type FullReport } from '@/lib/report-data'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import Link from 'next/link'
import { SuccessClient } from '@/components/SuccessClient'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams

  if (!session_id) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Invalid Session</h1>
          <p className="text-gray-400 mb-8">No session found.</p>
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

  let session
  try {
    session = await stripe.checkout.sessions.retrieve(session_id)
  } catch (error) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-400 mb-8">Could not retrieve session.</p>
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

  if (session.payment_status !== 'paid') {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Payment Not Completed</h1>
          <p className="text-gray-400 mb-8">Your payment was not processed.</p>
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

  const resultType = (session.metadata?.resultType as ResultType) || null
  if (!resultType || !validTypes.includes(resultType)) {
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

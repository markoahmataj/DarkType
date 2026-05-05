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

const ErrorState = ({ title, body }: { title: string; body: string }) => (
  <main className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
    <div className="max-w-xl w-full text-center">
      <h1 className="text-3xl font-bold text-[#f3f3f3] mb-4">{title}</h1>
      <p className="text-[#8a8a8a] mb-8">{body}</p>
      <Link
        href="/"
        className="inline-block px-8 py-3 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  </main>
)

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams

  if (!session_id) {
    return <ErrorState title="Invalid Session" body="No session found." />
  }

  let session
  try {
    session = await stripe.checkout.sessions.retrieve(session_id)
  } catch (error) {
    return <ErrorState title="Error" body="Could not retrieve session." />
  }

  if (session.payment_status !== 'paid') {
    return <ErrorState title="Payment Not Completed" body="Your payment was not processed." />
  }

  const resultType = (session.metadata?.resultType as ResultType) || null
  if (!resultType || !validTypes.includes(resultType)) {
    return <ErrorState title="Invalid Result Type" body="Something went wrong." />
  }

  const report = reports[resultType]
  const displayName = resultTypes[resultType].displayName

  return <SuccessClient report={report} displayName={displayName} sessionId={session_id} resultType={resultType} />
}

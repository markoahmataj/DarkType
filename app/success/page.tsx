import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Legacy Page</h1>
        <p className="text-gray-400 mb-8">This page is no longer used. Use /unlock?ref=TYPE instead.</p>
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

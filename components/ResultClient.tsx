'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { useState } from 'react'
import { Lock } from 'lucide-react'

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export function ResultClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const type = searchParams.get('type') as ResultType | null
  const isValidType = type && validTypes.includes(type)

  if (!isValidType) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Invalid Result</h1>
          <p className="text-gray-400 mb-8">Something went wrong. Please take the quiz again.</p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    )
  }

  const result = resultTypes[type]

  const handleUnlock = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resultType: type }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">{result.displayName}</h1>
          <p className="text-xl text-gray-300 mb-8">{result.teaser}</p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-6">Your Locked Preview</h2>

            <div className="space-y-6">
              <div className="relative">
                <div className="blur-sm select-none opacity-60">
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Your hidden strength</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Your toxic trait</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Your relationship pattern</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">How people experience you</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">What triggers you</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Your dark side under stress</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Best match</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-white mb-2">Worst match</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">How to improve</h3>
                    <p className="text-gray-300">Preview content is locked. Unlock to see your full analysis.</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-dark-800/80 to-dark-900/80 rounded-lg">
                  <div className="text-center">
                    <Lock size={48} className="text-red-500 mx-auto mb-3" />
                    <p className="text-white font-bold">Full Report Locked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-accent bg-opacity-10 p-8 rounded-lg border border-red-600 border-opacity-50">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">€1.99</div>
              <p className="text-gray-300 mb-6">Unlock your full personality report</p>
              <button
                onClick={handleUnlock}
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Redirecting...' : 'Unlock Full Report'}
              </button>
              <p className="text-xs text-gray-400 mt-4">Secure payment via Stripe</p>
            </div>
          </div>
        </div>

        <Disclaimer />
      </div>
    </main>
  )
}

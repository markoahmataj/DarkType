'use client'

import Link from 'next/link'
import { Disclaimer } from '@/components/Disclaimer'
import { type FullReport } from '@/lib/report-data'

interface SuccessClientProps {
  report: FullReport
  displayName: string
}

export function SuccessClient({ report, displayName }: SuccessClientProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(report.shareableText)
    alert('Copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">{displayName}</h1>
          <p className="text-lg text-gray-300">Your Complete Personality Report</p>
        </div>

        <div className="space-y-8">
          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Your Complete Summary</h2>
            <p className="text-gray-300 leading-relaxed">{report.summary}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Your Hidden Strength</h2>
            <p className="text-gray-300 leading-relaxed">{report.hiddenStrength}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Your Toxic Trait</h2>
            <p className="text-gray-300 leading-relaxed">{report.toxicTrait}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Your Relationship Pattern</h2>
            <p className="text-gray-300 leading-relaxed">{report.relationshipPattern}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">How People Experience You</h2>
            <p className="text-gray-300 leading-relaxed">{report.howPeopleExperienceYou}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">What Triggers You</h2>
            <p className="text-gray-300 leading-relaxed">{report.whatTriggersYou}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Your Dark Side Under Stress</h2>
            <p className="text-gray-300 leading-relaxed">{report.darkSideUnderStress}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Best Match</h2>
            <p className="text-gray-300 leading-relaxed">{report.bestMatch}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">Worst Match</h2>
            <p className="text-gray-300 leading-relaxed">{report.worstMatch}</p>
          </section>

          <section className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700">
            <h2 className="text-2xl font-bold text-white mb-4">How to Improve</h2>
            <p className="text-gray-300 leading-relaxed">{report.howToImprove}</p>
          </section>

          <section className="bg-gradient-accent bg-opacity-10 p-8 rounded-lg border border-red-600 border-opacity-50">
            <h2 className="text-2xl font-bold text-white mb-4">Share Your Result</h2>
            <div className="bg-dark-900 bg-opacity-80 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">{report.shareableText}</p>
              <button
                onClick={handleCopy}
                className="px-6 py-2 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
              >
                Copy Result
              </button>
            </div>
          </section>

          <div className="text-center py-8">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-dark-800 text-white font-bold rounded-lg hover:bg-dark-700 transition-all border border-dark-700"
            >
              Back to Home
            </Link>
          </div>

          <Disclaimer />
        </div>
      </div>
    </main>
  )
}

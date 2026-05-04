'use client'

import Link from 'next/link'
import { Disclaimer } from '@/components/Disclaimer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            What Is Your <span className="bg-gradient-accent bg-clip-text text-transparent">Dark</span> Personality Type?
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Take a 2-minute personality test and discover the hidden pattern behind how you think, react, attract, and protect yourself.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all text-lg"
          >
            Start the Test
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="bg-dark-800 bg-opacity-50 p-6 rounded-lg border border-dark-700">
            <div className="text-3xl font-black text-red-500 mb-2">20</div>
            <div className="text-gray-300">Questions</div>
          </div>
          <div className="bg-dark-800 bg-opacity-50 p-6 rounded-lg border border-dark-700">
            <div className="text-3xl font-black text-purple-500 mb-2">2</div>
            <div className="text-gray-300">Minutes</div>
          </div>
          <div className="bg-dark-800 bg-opacity-50 p-6 rounded-lg border border-dark-700">
            <div className="text-3xl font-black text-red-500 mb-2">6</div>
            <div className="text-gray-300">Personality Types</div>
          </div>
        </div>

        <div className="bg-dark-800 bg-opacity-50 p-8 rounded-lg border border-dark-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">What you get</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span>Instant result with free teaser</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 font-bold mr-3">•</span>
              <span>Preview of your full personality report</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span>Option to unlock complete analysis for €1.99</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 font-bold mr-3">•</span>
              <span>Shareable result text</span>
            </li>
          </ul>
        </div>

        <Disclaimer />
      </div>
    </main>
  )
}

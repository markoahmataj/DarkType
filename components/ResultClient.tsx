'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { useState } from 'react'
import { motion } from 'framer-motion'
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
      <main className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold text-[#f3f3f3] mb-4">Invalid Result</h1>
          <p className="text-[#8a8a8a] mb-8">Something went wrong. Please take the quiz again.</p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity"
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
        track('checkout_clicked')
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-16">
      <motion.div
        className="max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TYPE REVEAL */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-5">Your Archetype</p>
          <motion.h1
            className="text-7xl md:text-8xl font-black text-[#e63946] mb-6 leading-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {result.displayName}
          </motion.h1>
          <motion.p
            className="text-lg text-[#8a8a8a] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {result.teaser}
          </motion.p>
        </motion.div>

        {/* Free Insight */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="bg-[#111111] p-8 rounded-lg border border-white/[.08]">
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">What This Means</h2>
            <div className="space-y-4">
              {[
                `You are the ${result.displayName}. This is not a label — it's a pattern that runs deeper than you realize.`,
                'Most people share this pattern without seeing it. That invisibility is what makes it powerful.',
                'The cost of your strength is also your blind spot.',
              ].map((text, idx) => (
                <p key={idx} className="text-[#8a8a8a] leading-relaxed text-sm">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Paywall */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-[#111111] rounded-lg border border-white/[.08] overflow-hidden">
            <div className="p-8 border-b border-white/[.06]">
              <h2 className="text-xl font-bold text-[#f3f3f3] mb-2">Your Full Psychological Profile</h2>
              <p className="text-[#555] text-sm">Locked. Unlock once, yours forever.</p>
            </div>

            {/* Blurred preview */}
            <div className="p-8 border-b border-white/[.06] relative">
              <div className="blur-sm select-none pointer-events-none space-y-3">
                {[
                  'How people actually experience you',
                  'Your hidden strengths',
                  'Your toxic pattern',
                  'What triggers you',
                  'Your relationship behavior',
                  'Your growth path',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#8a8a8a]">
                    <span className="text-[#e63946] text-xs">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Lock size={28} className="text-[#e63946] mx-auto mb-2" />
                  <p className="text-xs text-[#555]">Content locked</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-black text-[#f3f3f3]">€0.99</span>
                <span className="text-sm text-[#555]">one-time · no subscription</span>
              </div>
              <p className="text-xs text-[#555] mb-6">Less than a coffee. Brutally honest.</p>
              <motion.button
                onClick={handleUnlock}
                disabled={isLoading}
                className="w-full py-4 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? 'Redirecting to Payment...' : 'Unlock Full Report — €0.99'}
              </motion.button>
              <p className="text-xs text-[#333] mt-4 text-center">Secure payment via Stripe</p>
            </div>
          </div>
        </motion.div>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

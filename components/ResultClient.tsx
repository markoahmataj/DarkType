'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { ReportUpsell } from '@/components/ReportUpsell'
import { motion } from 'framer-motion'

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export function ResultClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

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
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-20">
      <motion.div
        className="max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TYPE REVEAL */}
        <motion.div variants={itemVariants} className="mb-20">
          <p className="text-xs uppercase tracking-wider text-[#555] font-medium mb-6">Your Archetype</p>
          <motion.h1
            className="text-7xl md:text-8xl font-black text-[#e63946] mb-8 leading-none tracking-tighter"
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
        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-[#111111] p-10 rounded-lg border border-white/[.08]">
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Free Insight</h2>
            <div className="space-y-6">
              {[
                `You are the ${result.displayName}. This is not flattery—it's a behavior pattern that has shaped your life.`,
                'This pattern lives beneath your awareness. Everyone sees it. You don\'t.',
                'Everything it gives you comes with a hidden cost.',
              ].map((text, idx) => (
                <p key={idx} className="text-[#8a8a8a] leading-relaxed text-sm">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Upsell */}
        <motion.div variants={itemVariants} className="mb-16">
          <ReportUpsell resultType={type} />
        </motion.div>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

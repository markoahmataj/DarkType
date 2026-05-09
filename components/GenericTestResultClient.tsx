'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'
import { Disclaimer } from '@/components/Disclaimer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

interface ResultTypeData {
  displayName: string
  teaser: string
}

interface GenericTestResultClientProps {
  testSlug: string
  testName: string
  resultTypesData: Record<string, ResultTypeData>
  validTypes: string[]
}

export function GenericTestResultClient({
  testSlug,
  testName,
  resultTypesData,
  validTypes,
}: GenericTestResultClientProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const type = searchParams.get('type')
  const isValidType = type && validTypes.includes(type)

  useEffect(() => {
    if (isValidType) {
      track('result_viewed', { testSlug, resultType: type })
    }
  }, [isValidType, testSlug, type])

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

  const result = resultTypesData[type]

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
        <motion.div variants={itemVariants} className="mb-20">
          <p className="text-xs uppercase tracking-wider text-[#555] font-medium mb-6">Your Result</p>
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

        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-[#111111] p-10 rounded-lg border border-white/[.08]">
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Free Insight</h2>
            <div className="space-y-6">
              {[
                `You are ${result.displayName}. This is not a label — it is a pattern that has been shaping your behavior for years.`,
                'This pattern lives beneath your awareness. Everyone around you can see it. You are the last to know.',
                'Everything it gives you comes with a hidden cost. This is what the full report is about.',
              ].map((text, idx) => (
                <p key={idx} className="text-[#8a8a8a] leading-relaxed text-sm">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-[#e63946]/20"
          >
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#f3f3f3] mb-2">Unlock the Full Psychological Report</h2>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">
                Your result gives you the outline. The full report shows the pattern in detail: the emotional driver, the blind spots, the cost to your relationships, and the path forward.
              </p>
            </div>

            <div className="flex items-baseline gap-3 mb-6 py-6 border-y border-white/[.06]">
              <span className="text-4xl font-black text-[#f3f3f3]">€0.99</span>
              <span className="text-xs text-[#555] uppercase tracking-wide font-medium">one-time · instant access</span>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/reports/${testSlug}/${type}`}
                className="block w-full py-4 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-center text-sm flex items-center justify-center gap-2"
              >
                View My Full Report
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            <p className="text-xs text-[#555] mt-4 text-center">
              Digital PDF. Download instantly after payment. No subscription.
            </p>
          </motion.section>
        </motion.div>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

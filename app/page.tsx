'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Disclaimer } from '@/components/Disclaimer'
import { UpcomingTests } from '@/components/UpcomingTests'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-20">
      <div className="max-w-xl w-full">

        {/* Hero */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 text-[#f3f3f3] leading-tight tracking-tight"
          >
            Most people don't want the truth about themselves.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#8a8a8a] mb-10 leading-relaxed"
          >
            This test doesn't flatter you. It exposes you.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/quiz/personality-test"
              className="inline-block px-10 py-4 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Start the Test
            </Link>
            <p className="text-[#555] text-sm mt-5">
              Takes 2 minutes · No sign-up · €0.99 full report
            </p>
          </motion.div>
        </motion.div>

        {/* Test Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08] hover:border-white/[.14] transition-colors duration-200"
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <h2 className="text-xl font-bold text-[#f3f3f3] mb-3">Your Psychological Profile</h2>
            <p className="text-[#8a8a8a] mb-8 leading-relaxed text-sm">
              Reveal the archetype that controls how you relate, react, and lose control.
            </p>
            <div className="flex items-center justify-between text-xs text-[#555] mb-8">
              <span>3–5 minutes</span>
              <span>Free preview · €0.99 full report</span>
            </div>
            <Link
              href="/quiz/personality-test"
              className="block w-full py-3 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-center text-sm"
            >
              Start the Test
            </Link>
          </motion.div>
        </motion.div>

        {/* Upcoming Tests */}
        <UpcomingTests />

        {/* Why Section */}
        <motion.div
          className="bg-[#111111] p-8 rounded-lg border border-white/[.08] mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">Why DarkType?</h2>
          <div className="space-y-5">
            {[
              'No flattery. No ego protection.',
              'Two minutes to uncomfortable truth.',
              'Read it carefully. It\'s accurate.',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
              >
                <span className="text-[#e63946] font-bold flex-shrink-0 mt-0.5 text-sm">—</span>
                <span className="text-[#8a8a8a] text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Disclaimer />
      </div>
    </main>
  )
}

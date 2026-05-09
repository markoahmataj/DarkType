'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Disclaimer } from '@/components/Disclaimer'
import { ChevronRight } from 'lucide-react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const tests = [
  {
    title: 'The Dark Personality Test',
    description: 'Identify your archetype: the pattern that shapes how you relate, manipulate, and protect yourself.',
    href: '/quiz/personality-test',
  },
  {
    title: 'Toxic Pattern Test',
    description: 'Identify the pattern that quietly ruins your relationships.',
    href: '/quiz/toxic-pattern-test',
  },
  {
    title: 'Attachment Style Test',
    description: 'Understand how you connect, cling, or pull away.',
    href: '/quiz/attachment-style-test',
  },
  {
    title: 'Manipulation Style Test',
    description: 'See how you influence others — consciously or not.',
    href: '/quiz/manipulation-style-test',
  },
  {
    title: 'Emotional Trigger Test',
    description: 'Discover what actually sets you off.',
    href: '/quiz/emotional-trigger-test',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-20">
      <div className="max-w-2xl w-full">

        {/* Hero */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 text-[#f3f3f3] leading-tight tracking-tighter"
          >
            You already know the pattern.<br />This test names it.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#8a8a8a] mb-12 leading-relaxed"
          >
            No flattery. No comforting diagnosis. Choose the test that exposes the pattern you keep repeating.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#tests"
              className="inline-block px-12 py-4 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Explore Tests
            </a>
            <p className="text-[#555] text-xs mt-6 tracking-wide">
              5 tests · 3 minutes each · €0.99 full report
            </p>
          </motion.div>
        </motion.div>

        {/* Test Library */}
        <motion.div
          id="tests"
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="mb-8">
            <p className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-3">Test Library</p>
            <h2 className="text-xl font-bold text-[#f3f3f3] mb-3">Choose What You Want Exposed</h2>
            <p className="text-sm text-[#666] leading-relaxed">
              Each test reveals a different layer of your behavior: personality, toxicity, attachment, manipulation, or emotional triggers.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {tests.map((test, index) => (
              <motion.div
                key={test.title}
                variants={cardVariants}
                className={index === tests.length - 1 && tests.length % 2 !== 0 ? 'md:col-span-2' : ''}
              >
                <Link
                  href={test.href}
                  className="flex flex-col h-full bg-[#111111] p-6 rounded-lg border border-white/[.06] hover:border-white/[.12] hover:bg-[#131313] transition-all duration-150 group"
                >
                  <div className="flex-1 mb-5">
                    <p className="text-sm font-semibold text-[#f3f3f3] mb-2">{test.title}</p>
                    <p className="text-xs text-[#666] leading-relaxed">{test.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#444] mb-4 pt-4 border-t border-white/[.04]">
                    <span className="uppercase tracking-wider">3 minutes</span>
                    <span className="uppercase tracking-wider">Free preview</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#aaa] group-hover:text-[#f3f3f3] transition-colors">Begin Test</span>
                    <ChevronRight size={14} className="text-[#444] group-hover:text-[#888] transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Why Section */}
        <motion.div
          className="bg-[#111111] p-10 rounded-lg border border-white/[.08] mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-8">Why DarkType?</h2>
          <div className="space-y-6">
            {[
              { title: 'No ego shields', desc: 'Results are designed to confront, not reassure.' },
              { title: 'Pattern recognition', desc: 'Name the behavior you keep repeating.' },
              { title: 'Brutally valid', desc: 'Every answer points back to patterns, not flattery.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 pb-6 border-b border-white/[.04] last:pb-0 last:border-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
              >
                <span className="text-[#e63946] font-bold flex-shrink-0 mt-0.5 text-lg">—</span>
                <div>
                  <p className="text-[#f3f3f3] text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Disclaimer />
      </div>
    </main>
  )
}

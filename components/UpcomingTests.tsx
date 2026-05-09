'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const tests = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function UpcomingTests() {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
    >
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-2">More Tests</h2>
        <p className="text-[#555] text-sm">Explore different dimensions of your psychology.</p>
      </div>

      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tests.map((test) => (
          <motion.div key={test.title} variants={itemVariants}>
            <Link
              href={test.href}
              className="block bg-[#111111] p-6 rounded-lg border border-white/[.06] hover:border-white/[.12] hover:bg-[#131313] transition-all duration-150"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#f3f3f3] mb-1">{test.title}</p>
                  <p className="text-xs text-[#666] leading-relaxed">{test.description}</p>
                </div>
                <ChevronRight size={16} className="text-[#555] flex-shrink-0 mt-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

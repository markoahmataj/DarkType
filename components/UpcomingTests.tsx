'use client'

import { motion } from 'framer-motion'

const upcomingTests = [
  {
    title: 'Toxic Pattern Test',
    description: 'Identify the pattern that quietly ruins your relationships.',
  },
  {
    title: 'Attachment Style Test',
    description: 'Understand how you connect, cling, or pull away.',
  },
  {
    title: 'Manipulation Style Test',
    description: 'See how you influence others — consciously or not.',
  },
  {
    title: 'Emotional Trigger Test',
    description: 'Discover what actually sets you off.',
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
      className="mb-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
    >
      <div className="mb-5">
        <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-1">More Tests Coming</h2>
        <p className="text-[#555] text-sm">Explore other dimensions of your psychology.</p>
      </div>

      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {upcomingTests.map((test) => (
          <motion.div
            key={test.title}
            variants={itemVariants}
            className="bg-[#111111] p-6 rounded-lg border border-white/[.06] opacity-70 cursor-not-allowed select-none"
            title="Coming soon"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#f3f3f3] mb-1">{test.title}</p>
                <p className="text-xs text-[#555] leading-relaxed">{test.description}</p>
              </div>
              <span className="flex-shrink-0 text-[10px] font-semibold text-[#555] border border-white/[.08] rounded px-2 py-0.5 uppercase tracking-wider mt-0.5">
                Soon
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

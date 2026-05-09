'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { reportProducts } from '@/lib/reports-shop-data'
import { type ResultType } from '@/lib/quiz-data'
import { ChevronRight } from 'lucide-react'

interface ReportUpsellProps {
  resultType: ResultType
}

export function ReportUpsell({ resultType }: ReportUpsellProps) {
  const product = reportProducts[resultType]

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-[#e63946]/20"
    >
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#f3f3f3] mb-2">Unlock the Full Psychological Report</h2>
        <p className="text-[#8a8a8a] text-sm leading-relaxed">
          Your result gives you the outline. The full report shows the pattern in detail: your emotional defenses, blind spots, behavioral loops, relationship tendencies, and the traits you hide in plain sight.
        </p>
      </div>

      <div className="flex items-baseline gap-3 mb-6 py-6 border-y border-white/[.06]">
        <span className="text-4xl font-black text-[#f3f3f3]">€0.99</span>
        <span className="text-xs text-[#555] uppercase tracking-wide font-medium">one-time · instant access</span>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={`/reports/${resultType}`}
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
  )
}

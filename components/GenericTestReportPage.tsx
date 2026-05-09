'use client'

import { useParams, useRouter } from 'next/navigation'
import { Disclaimer } from '@/components/Disclaimer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { track } from '@vercel/analytics'

interface GenericReportProduct {
  slug: string
  displayName: string
  reportTitle: string
  shortDescription: string
  whatYouGet: string[]
  whyItMatters: string
  price: number
  currency: string
}

interface GenericResultTypeData {
  displayName: string
  teaser: string
}

interface GenericTestReportPageProps {
  testSlug: string
  reportProducts: Record<string, GenericReportProduct>
  resultTypesData: Record<string, GenericResultTypeData>
  validTypes: string[]
}

export function GenericTestReportPage({
  testSlug,
  reportProducts,
  resultTypesData,
  validTypes,
}: GenericTestReportPageProps) {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const type = params.type as string | null
  const isValidType = type && validTypes.includes(type)

  if (!isValidType) {
    return (
      <main className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold text-[#f3f3f3] mb-4">Report Not Found</h1>
          <p className="text-[#8a8a8a] mb-8">This report doesn't exist. Please take the test again.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const product = reportProducts[type]
  const resultType = resultTypesData[type]

  const handleBuyReport = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resultType: type, testSlug }),
      })

      const data = await response.json()
      if (data.url) {
        track('report_checkout_clicked', { testSlug, resultType: type })
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
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-12">
      <motion.div
        className="max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            href={`/result/${testSlug}?type=${type}`}
            className="inline-flex items-center gap-2 text-[#555] text-sm hover:text-[#8a8a8a] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Result
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xs uppercase tracking-wider text-[#555] font-medium mb-4">Full Psychological Report</p>
          <h1 className="text-5xl md:text-6xl font-black text-[#f3f3f3] mb-6 leading-tight tracking-tighter">
            {product.reportTitle}
          </h1>
          <p className="text-lg text-[#8a8a8a] leading-relaxed">
            {resultType.teaser}
          </p>
        </motion.div>

        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.08] mb-8"
        >
          <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">What You Get</h2>
          <div className="space-y-4">
            {product.whatYouGet.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <Check size={16} className="text-[#e63946] flex-shrink-0 mt-1" />
                <p className="text-[#8a8a8a] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.08] mb-8"
        >
          <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-6">Why This Matters</h2>
          <p className="text-[#8a8a8a] leading-relaxed text-sm">{product.whyItMatters}</p>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-[#e63946]/20 mb-8"
        >
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-4">
              {product.reportTitle}
            </h2>
            <p className="text-[#8a8a8a] text-sm mb-6">
              Digital PDF. Instant download after payment. One-time purchase. No subscription.
            </p>

            <div className="flex items-baseline gap-3 mb-8 py-6 border-y border-white/[.06]">
              <span className="text-5xl font-black text-[#f3f3f3]">€0.99</span>
              <span className="text-xs text-[#555] uppercase tracking-wide font-medium">one-time access</span>
            </div>

            <motion.button
              onClick={handleBuyReport}
              disabled={isLoading}
              className="w-full py-5 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? 'Redirecting to Payment...' : 'Buy Full Report'}
            </motion.button>

            <p className="text-xs text-[#555] mt-4 text-center">
              Secure payment via Stripe
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.08] mb-8"
        >
          <div className="space-y-4 text-sm text-[#8a8a8a]">
            <p className="flex items-start gap-3">
              <span className="text-[#e63946] font-bold mt-1">✓</span>
              <span>Instant digital download after payment</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#e63946] font-bold mt-1">✓</span>
              <span>No subscription required</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#e63946] font-bold mt-1">✓</span>
              <span>One-time purchase. Yours forever.</span>
            </p>
          </div>
        </motion.section>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

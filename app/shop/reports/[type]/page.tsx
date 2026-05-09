'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { dossierProducts } from '@/lib/dossier-shop-data'
import { resultTypes, type ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

const validTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']

export default function DossierPage() {
  const params = useParams()

  const type = params.type as ResultType | null
  const isValidType = type && validTypes.includes(type)

  if (!isValidType) {
    return (
      <main className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-3xl font-bold text-[#f3f3f3] mb-4">Dossier Not Found</h1>
          <p className="text-[#8a8a8a] mb-8">This dossier doesn&apos;t exist. Please try again.</p>
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

  const product = dossierProducts[type]
  const archetype = resultTypes[type]

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
        {/* Back button */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            href={`/success`}
            className="inline-flex items-center gap-2 text-[#555] text-sm hover:text-[#8a8a8a] transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </motion.div>

        {/* Coming Soon notice */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] rounded-full bg-[#0d0d0d]">
            <span className="text-[#444] text-xs font-medium uppercase tracking-widest">Coming Soon</span>
          </div>
        </motion.div>

        {/* Hero with Cover Image */}
        <motion.div variants={itemVariants} className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Cover Image */}
          <motion.div
            className="order-2 md:order-1 flex items-center justify-center opacity-40 grayscale"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden border border-[#333]/40 shadow-2xl">
              <Image
                src={product.coverImage}
                alt={product.productTitle}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-wider text-[#333] font-medium mb-4">50-Page Psychological Dossier</p>
            <h1 className="text-5xl md:text-6xl font-black text-[#555] mb-6 leading-tight tracking-tighter">
              The {archetype.displayName} Dossier
            </h1>
            <p className="text-lg text-[#3a3a3a] leading-relaxed mb-8">
              Full archetype dossiers are being prepared. This product is not available yet.
            </p>
          </div>
        </motion.div>

        {/* What this dossier reveals */}
        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.05] mb-8 opacity-50"
        >
          <h2 className="text-xs font-semibold text-[#333] uppercase tracking-wider font-medium mb-8">What This Dossier Reveals</h2>
          <div className="space-y-4">
            {product.whatIsInside.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <Check size={16} className="text-[#333] flex-shrink-0 mt-1" />
                <p className="text-[#333] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why it matters */}
        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.05] mb-8 opacity-50"
        >
          <h2 className="text-xs font-semibold text-[#333] uppercase tracking-wider font-medium mb-6">Why This Matters</h2>
          <p className="text-[#333] leading-relaxed text-sm">{product.selfMasterySection}</p>
        </motion.section>

        {/* Product CTA — Coming Soon */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-white/[.04] mb-8"
        >
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-[#333] uppercase tracking-wider font-medium mb-4">
              {product.productTitle}
            </h2>
            <p className="text-[#2a2a2a] text-sm mb-6">
              Full archetype dossiers are being prepared. This product is not available yet.
            </p>

            <div className="flex items-baseline gap-3 mb-8 py-6 border-y border-white/[.04]">
              <span className="text-2xl text-[#2a2a2a] line-through">{product.originalPrice}</span>
              <span className="text-5xl font-black text-[#3a3a3a]">{product.launchPrice}</span>
            </div>

            <button
              disabled
              className="w-full py-5 bg-[#111] text-[#333] font-bold rounded-lg text-sm cursor-not-allowed border border-[#1e1e1e]"
            >
              Coming Soon
            </button>

            <p className="text-xs text-[#2a2a2a] mt-4 text-center">
              Coming soon. No purchase is available for this dossier right now.
            </p>
          </div>
        </motion.section>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

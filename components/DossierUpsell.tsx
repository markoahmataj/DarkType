'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { dossierProducts } from '@/lib/dossier-shop-data'
import { type ResultType } from '@/lib/quiz-data'

interface DossierUpsellProps {
  resultType: ResultType
}

export function DossierUpsell({ resultType }: DossierUpsellProps) {
  const product = dossierProducts[resultType]

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      variants={itemVariants}
      className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-8 md:p-10 rounded-lg border border-white/[.06] mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Cover Image */}
        <motion.div
          className="flex items-center justify-center opacity-40 grayscale"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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

        {/* Content & CTA */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] mb-4">
              <span className="text-[#444] text-xs font-medium uppercase tracking-widest">Coming Soon</span>
            </div>
            <h2 className="text-lg font-bold text-[#555] mb-2">{product.productTitle}</h2>
            <p className="text-[#3a3a3a] text-sm leading-relaxed mb-4">
              50-page psychological dossier.
            </p>
            <p className="text-[#333] text-sm leading-relaxed">
              Full archetype dossiers are being prepared. This product is not available yet.
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-3 mb-6 py-4 border-y border-white/[.04]">
              <span className="text-xl text-[#2a2a2a] line-through">{product.originalPrice}</span>
              <span className="text-4xl font-black text-[#3a3a3a]">{product.launchPrice}</span>
            </div>

            <button
              disabled
              className="block w-full py-4 bg-[#111] text-[#333] font-bold rounded-lg text-center text-sm cursor-not-allowed border border-[#1e1e1e]"
            >
              Coming Soon
            </button>

            <p className="text-xs text-[#2a2a2a] mt-4 text-center">
              Coming soon. No purchase is available for this dossier right now.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

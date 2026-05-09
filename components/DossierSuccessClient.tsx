'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { Disclaimer } from '@/components/Disclaimer'
import { dossierProducts } from '@/lib/dossier-shop-data'
import { Download, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { type ResultType } from '@/lib/quiz-data'

interface DossierSuccessClientProps {
  displayName: string
  sessionId: string
  resultType: ResultType
}

export function DossierSuccessClient({ displayName, sessionId, resultType }: DossierSuccessClientProps) {
  const product = dossierProducts[resultType]
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  useEffect(() => {
    track('dossier_purchase_success')
  }, [])

  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadError(null)
    try {
      const response = await fetch('/api/download-dossier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, resultType }),
      })

      if (!response.ok) {
        const error = await response.json()
        setDownloadError(error.error || 'Failed to download dossier')
        setIsDownloading(false)
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `DarkType-${resultType}-dossier.pdf`
      a.click()
      window.URL.revokeObjectURL(url)

      track('dossier_downloaded')
    } catch (error) {
      setDownloadError('Error downloading dossier')
    } finally {
      setIsDownloading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
        {/* Confirmation badge */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/[.08] rounded-full bg-[#0d0d0d]">
            <CheckCircle size={14} className="text-green-500" />
            <p className="text-[#555] text-xs font-medium tracking-wide">Payment Confirmed · Your Dossier is Ready</p>
          </div>
        </motion.div>

        {/* Type reveal */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xs uppercase tracking-wider text-[#555] font-medium mb-6">Your Archetype Dossier</p>
          <h1 className="text-6xl md:text-7xl font-black text-[#e63946] mb-6 leading-none tracking-tighter">
            {displayName}
          </h1>
          <p className="text-lg text-[#8a8a8a] leading-relaxed">
            50-page psychological dossier. Yours forever.
          </p>
        </motion.div>

        {/* Cover Image Celebration */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex items-center justify-center"
        >
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden border border-[#555]/40 shadow-2xl">
            <Image
              src={product.coverImage}
              alt={product.productTitle}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Download section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-[#e63946]/20 mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <Download size={20} className="text-[#e63946] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-[#f3f3f3]">Download Your Dossier</h2>
              <p className="text-[#555] text-sm mt-1">50-page PDF. Keep it forever. Reference it always.</p>
            </div>
          </div>

          {downloadError ? (
            <div className="mb-6 p-4 bg-[#0d0d0d] border border-[#e63946]/30 rounded-lg">
              <p className="text-[#e63946] text-sm">{downloadError}</p>
            </div>
          ) : null}

          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full py-5 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            whileHover={!isDownloading ? { scale: 1.02 } : {}}
            whileTap={!isDownloading ? { scale: 0.98 } : {}}
          >
            {isDownloading ? 'Downloading...' : 'Download PDF Dossier'}
          </motion.button>
        </motion.section>

        {/* What you have */}
        <motion.section
          variants={itemVariants}
          className="bg-[#111111] p-10 rounded-lg border border-white/[.08] mb-8"
        >
          <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-6">What This Dossier Contains</h2>
          <ul className="space-y-4 text-sm text-[#8a8a8a]">
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>Core psychological pattern and what drives your archetype</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>Emotional defense mechanisms and how you survive</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>Hidden behavioral loops and recurring patterns</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>Blind spots and the costs of your type</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>Self-mastery framework and practical path forward</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#e63946] font-bold flex-shrink-0">✓</span>
              <span>12 reflection prompts designed to expose what you avoid</span>
            </li>
          </ul>
        </motion.section>

        {/* Back to home */}
        <motion.div variants={itemVariants} className="text-center py-6">
          <Link
            href="/"
            className="inline-block px-8 py-3 border border-white/[.12] text-[#555] font-medium rounded-lg hover:bg-white/[.05] hover:border-white/[.16] hover:text-[#8a8a8a] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </motion.div>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

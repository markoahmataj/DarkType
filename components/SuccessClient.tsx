'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { Disclaimer } from '@/components/Disclaimer'
import { type FullReport } from '@/lib/report-data'
import { type ResultType } from '@/lib/quiz-data'
import { CheckCircle, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

interface SuccessClientProps {
  report: FullReport
  displayName: string
  sessionId: string
  resultType: ResultType
}

export function SuccessClient({ report, displayName, sessionId, resultType }: SuccessClientProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    track('payment_success')
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(report.shareableText)
    alert('Copied to clipboard!')
  }

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/api/download-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, resultType }),
      })

      if (!response.ok) {
        alert('Failed to download report')
        setIsDownloading(false)
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `DarkType-${resultType}.pdf`
      a.click()
      window.URL.revokeObjectURL(url)

      track('pdf_sent')
    } catch (error) {
      alert('Error downloading report')
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
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-16">
      <motion.div
        className="max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Confirmation badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[.08] rounded-full">
            <CheckCircle size={14} className="text-green-500" />
            <p className="text-[#555] text-xs font-medium">Payment Confirmed</p>
          </div>
        </motion.div>

        {/* Type reveal */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#555] mb-4">Your Archetype</p>
          <h1 className="text-7xl md:text-8xl font-black text-[#e63946] mb-5 leading-none">
            {displayName}
          </h1>
          <p className="text-lg text-[#8a8a8a] leading-relaxed">
            You now see what most people ignore.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">

          {/* Summary */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">Your Complete Summary</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.summary}</p>
          </motion.section>

          {/* Psychological Profile */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">Psychological Profile</h2>
            <div className="space-y-5">
              {report.psychProfile.split('\n').map((line, i) => (
                <div
                  key={i}
                  className="pb-5 border-b border-white/[.06] last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-[#e63946] text-sm">{line.split(':')[0]}:</span>
                  <p className="text-[#8a8a8a] mt-1.5 leading-relaxed text-sm">{line.split(':').slice(1).join(':')}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Hidden Strength */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">Your Hidden Strength</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.hiddenStrength}</p>
          </motion.section>

          {/* Toxic Trait */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-widest mb-5">Your Toxic Trait</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.toxicTrait}</p>
          </motion.section>

          {/* Relationship Pattern */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">Your Relationship Pattern</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.relationshipPattern}</p>
          </motion.section>

          {/* How People Experience You */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">How People Experience You</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.howPeopleExperienceYou}</p>
          </motion.section>

          {/* Triggers */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">What Triggers You</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.whatTriggersYou}</p>
          </motion.section>

          {/* Dark Side */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-widest mb-5">Your Dark Side Under Stress</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.darkSideUnderStress}</p>
          </motion.section>

          {/* Best / Worst Match */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">Best Match</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.bestMatch}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-widest mb-5">Worst Match</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.worstMatch}</p>
          </motion.section>

          {/* Type System */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">The Type System</h2>
            <div className="space-y-3">
              {report.typeSystem.split('\n').map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#e63946] font-bold text-xs flex-shrink-0 mt-0.5">—</span>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Path to Growth */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-5">Path to Growth</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm italic">{report.howToImprove}</p>
          </motion.section>

          {/* Share Your Type */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">Share Your Type</h2>
            <div className="bg-[#141414] p-6 rounded-lg border border-white/[.06] mb-5">
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-5">{report.shareableText}</p>
              <motion.button
                onClick={handleCopy}
                className="w-full py-3 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Copy to Clipboard
              </motion.button>
            </div>
          </motion.section>

          {/* Download */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <div className="flex items-center gap-3 mb-2">
              <Download size={18} className="text-[#e63946]" />
              <h2 className="text-base font-bold text-[#f3f3f3]">Download Your Full Report</h2>
            </div>
            <p className="text-[#555] text-sm mb-6">Save your complete psychological profile as PDF.</p>
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full py-4 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              whileHover={!isDownloading ? { scale: 1.02 } : {}}
              whileTap={!isDownloading ? { scale: 0.98 } : {}}
            >
              {isDownloading ? 'Downloading...' : 'Download Full Report'}
            </motion.button>
            <p className="text-xs text-[#333] mt-4 text-center">Read it carefully. It's accurate.</p>
          </motion.section>

          {/* More Tests */}
          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-8 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-base font-bold text-[#f3f3f3] mb-2">Curious About More?</h2>
            <p className="text-[#555] text-sm mb-6">
              Explore additional DarkType tests to uncover other dimensions of your psychology.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="block w-full py-3 border border-white/[.14] text-[#8a8a8a] font-semibold rounded-lg hover:bg-white/[.06] hover:text-[#f3f3f3] transition-colors text-center text-sm"
              >
                See All Tests
              </Link>
            </motion.div>
          </motion.section>

          {/* Back to Home */}
          <motion.div variants={itemVariants} className="text-center py-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-white/[.14] text-[#555] font-medium rounded-lg hover:bg-white/[.06] hover:text-[#8a8a8a] transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </motion.div>

          <Disclaimer />
        </motion.div>
      </motion.div>
    </main>
  )
}

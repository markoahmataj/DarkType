'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { Disclaimer } from '@/components/Disclaimer'
import { type FullReport } from '@/lib/report-data'
import { CheckCircle, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TestSuccessClientProps {
  report: FullReport
  displayName: string
  sessionId: string
  resultType: string
  testSlug: string
  testName: string
}

export function TestSuccessClient({
  report,
  displayName,
  sessionId,
  resultType,
  testSlug,
  testName,
}: TestSuccessClientProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    track('payment_success', { testSlug })
  }, [testSlug])

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
        body: JSON.stringify({ sessionId, resultType, testSlug }),
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
      a.download = `DarkType-${testSlug}-${resultType}.pdf`
      a.click()
      window.URL.revokeObjectURL(url)

      track('pdf_sent', { testSlug })
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
    <main className="min-h-screen bg-dark-950 flex flex-col items-center px-4 py-20">
      <motion.div
        className="max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/[.08] rounded-full bg-[#0d0d0d]">
            <CheckCircle size={14} className="text-green-500" />
            <p className="text-[#555] text-xs font-medium tracking-wide">Payment Confirmed · Your Report is Ready</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xs uppercase tracking-wider text-[#555] font-medium mb-6">Your Result</p>
          <h1 className="text-6xl md:text-7xl font-black text-[#e63946] mb-6 leading-none tracking-tighter">
            {displayName}
          </h1>
          <p className="text-lg text-[#8a8a8a] leading-relaxed">
            You've paid for brutal honesty. Here it is.
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Executive Summary</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.summary}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Psychological Profile</h2>
            <div className="space-y-6">
              {report.psychProfile.split('\n').map((line, i) => (
                <div
                  key={i}
                  className="pb-6 border-b border-white/[.05] last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-[#e63946] text-sm">{line.split(':')[0]}:</span>
                  <p className="text-[#8a8a8a] mt-2 leading-relaxed text-sm">{line.split(':').slice(1).join(':')}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Your Hidden Strength</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.hiddenStrength}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-wider font-medium mb-8">Your Toxic Trait</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.toxicTrait}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Your Relationship Pattern</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.relationshipPattern}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">How People Experience You</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.howPeopleExperienceYou}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">What Triggers You</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.whatTriggersYou}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-wider font-medium mb-8">Your Dark Side Under Stress</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.darkSideUnderStress}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Best Match</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.bestMatch}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#e63946] uppercase tracking-wider font-medium mb-8">Worst Match</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm">{report.worstMatch}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">The Type System</h2>
            <div className="space-y-4">
              {report.typeSystem.split('\n').map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#e63946] font-bold text-xs flex-shrink-0 mt-0.5">—</span>
                  <p className="text-[#8a8a8a] text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Path to Growth</h2>
            <p className="text-[#8a8a8a] leading-relaxed text-sm italic">{report.howToImprove}</p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-xs font-semibold text-[#555] uppercase tracking-wider font-medium mb-8">Share Your Result</h2>
            <div className="bg-[#0d0d0d] p-8 rounded-lg border border-white/[.06] mb-6">
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-6">{report.shareableText}</p>
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

          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] p-10 rounded-lg border border-[#e63946]/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <Download size={20} className="text-[#e63946] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-[#f3f3f3]">Download Your Full Report</h2>
                <p className="text-[#555] text-sm mt-1">Save as PDF. Keep forever. Share wisely.</p>
              </div>
            </div>
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full py-5 bg-[#f3f3f3] text-[#050505] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-40 disabled:cursor-not-allowed mt-6"
              whileHover={!isDownloading ? { scale: 1.02 } : {}}
              whileTap={!isDownloading ? { scale: 0.98 } : {}}
            >
              {isDownloading ? 'Downloading...' : 'Download PDF Report'}
            </motion.button>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-[#111111] p-10 rounded-lg border border-white/[.08]"
          >
            <h2 className="text-base font-bold text-[#f3f3f3] mb-3">Explore More Tests</h2>
            <p className="text-[#555] text-sm mb-8">
              Other DarkType tests reveal different dimensions of your psychology.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="block w-full py-4 border border-white/[.12] text-[#8a8a8a] font-semibold rounded-lg hover:bg-white/[.05] hover:border-white/[.16] hover:text-[#f3f3f3] transition-colors text-center text-sm"
              >
                See All Tests
              </Link>
            </motion.div>
          </motion.section>

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
      </motion.div>
    </main>
  )
}

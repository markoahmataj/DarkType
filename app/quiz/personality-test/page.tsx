'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { track } from '@vercel/analytics'
import { questions, ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PersonalityTestPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<ResultType[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  useEffect(() => {
    track('test_started')
  }, [])

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, question.answers[selectedAnswer].type]

    if (currentQuestion === questions.length - 1) {
      const typeCounts = newAnswers.reduce(
        (acc, type) => {
          acc[type] = (acc[type] || 0) + 1
          return acc
        },
        {} as Record<ResultType, number>
      )

      const resultTypes: ResultType[] = ['strategist', 'charmer', 'rebel', 'ghost', 'mirror', 'protector']
      let maxCount = 0
      let resultType: ResultType = 'strategist'

      for (const type of resultTypes) {
        if ((typeCounts[type] || 0) > maxCount) {
          maxCount = typeCounts[type] || 0
          resultType = type
        }
      }

      track('test_completed')
      router.push(`/result?type=${resultType}`)
    } else {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      const newAnswers = answers.slice(0, -1)
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <main className="min-h-screen bg-dark-950 flex flex-col px-4 py-12">
      <motion.div
        className="max-w-xl w-full mx-auto flex flex-col flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Progress */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-[#555]">
              {currentQuestion + 1} / {questions.length}
            </span>
            <motion.span
              className="text-xs font-semibold text-[#8a8a8a]"
              key={Math.round(progress)}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
          <div className="w-full h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#e63946]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="mb-14 flex-grow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#f3f3f3] mb-10 leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4 }}
            >
              {question.text}
            </motion.h2>

            <div className="space-y-3">
              {question.answers.map((answer, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-5 text-left rounded-lg border font-medium text-sm leading-relaxed transition-colors duration-150 ${
                    selectedAnswer === index
                      ? 'bg-[#141414] border-[#e63946] text-[#f3f3f3]'
                      : 'bg-[#111111] border-white/[.08] text-[#8a8a8a] hover:border-white/[.18] hover:text-[#f3f3f3]'
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          className="flex gap-4 justify-between items-center pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border ${
              currentQuestion === 0
                ? 'border-white/[.04] text-[#333] cursor-not-allowed'
                : 'border-white/[.14] text-[#8a8a8a] hover:bg-white/[.06] hover:text-[#f3f3f3]'
            }`}
            whileHover={currentQuestion > 0 ? { scale: 1.03 } : {}}
            whileTap={currentQuestion > 0 ? { scale: 0.97 } : {}}
          >
            <ChevronLeft size={16} />
            Back
          </motion.button>

          <AnimatePresence mode="wait">
            {selectedAnswer !== null ? (
              <motion.span
                key="selected"
                className="text-xs text-[#555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ✓ Selected
              </motion.span>
            ) : (
              <motion.span
                key="unselected"
                className="text-xs text-[#555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Choose an answer
              </motion.span>
            )}
          </AnimatePresence>

          <motion.button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-bold ${
              selectedAnswer === null
                ? 'bg-[#1a1a1a] text-[#333] cursor-not-allowed'
                : 'bg-[#f3f3f3] text-[#050505] hover:opacity-90'
            }`}
            whileHover={selectedAnswer !== null ? { scale: 1.03 } : {}}
            whileTap={selectedAnswer !== null ? { scale: 0.97 } : {}}
          >
            {currentQuestion === questions.length - 1 ? 'See My Result' : 'Next'}
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>

        <Disclaimer />
      </motion.div>
    </main>
  )
}

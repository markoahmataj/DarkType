'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { questions, ResultType } from '@/lib/quiz-data'
import { Disclaimer } from '@/components/Disclaimer'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<ResultType[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, question.answers[selectedAnswer].type]

    if (currentQuestion === questions.length - 1) {
      // Calculate result
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
    <main className="min-h-screen bg-gradient-dark flex flex-col px-4 py-8">
      <div className="max-w-2xl w-full mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-dark-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{question.text}</h2>

          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedAnswer === index
                    ? 'bg-gradient-accent text-white font-semibold'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 border border-dark-700'
                }`}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              currentQuestion === 0
                ? 'bg-dark-700 text-gray-600 cursor-not-allowed'
                : 'bg-dark-800 text-white hover:bg-dark-700 border border-dark-700'
            }`}
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedAnswer === null
                ? 'bg-dark-700 text-gray-600 cursor-not-allowed'
                : 'bg-gradient-accent text-white hover:shadow-lg hover:shadow-red-600/50'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Reveal My Type' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>

        <Disclaimer />
      </div>
    </main>
  )
}

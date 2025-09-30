'use client'

import { useState, useEffect } from 'react'

export default function PersonalityQuiz({ onComplete, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
    document.body.style.overflow ='hidden'
    return () => {
      document.body.style.overflow ='unset'
    }
  }, [])

  const questions = [
    {
      id: 'activityLevel',
      question: 'How active are you?',
      options: [
        { value: 1, label: 'Low activity - I prefer relaxing at home' },
        { value: 2, label: 'Light activity - Occasional walks' },
        { value: 3, label: 'Moderate activity - Regular exercise' },
        { value: 4, label: 'High activity - Daily vigorous exercise' },
        { value: 5, label: 'Very high - Multiple daily activities' }
      ]
    },
    {
      id: 'experience',
      question: 'What\'s your experience with dogs?',
      options: [
        { value: 1, label: 'Complete beginner' },
        { value: 2, label: 'Some experience' },
        { value: 3, label: 'Experienced owner' },
        { value: 4, label: 'Very experienced' }
      ]
    },
    {
      id: 'livingSpace',
      question: 'What\'s your living situation?',
      options: [
        { value: 1, label: 'Small apartment' },
        { value: 2, label: 'Large apartment' },
        { value: 3, label: 'House with small yard' },
        { value: 4, label: 'House with large yard' },
        { value: 5, label: 'Farm/acreage' }
      ]
    },
    {
      id: 'hoursAtHome',
      question: 'How many hours per day are you home?',
      options: [
        { value: 2, label: '2-4 hours' },
        { value: 6, label: '4-6 hours' },
        { value: 8, label: '6-8 hours' },
        { value: 10, label: '8+ hours' },
        { value: 12, label: 'Almost always home' }
      ]
    },
    {
      id: 'groomingCommitment',
      question: 'How much grooming are you willing to do?',
      options: [
        { value: 1, label: 'Minimal - basic brushing' },
        { value: 2, label: 'Light - weekly grooming' },
        { value: 3, label: 'Moderate - regular maintenance' },
        { value: 4, label: 'High - frequent professional grooming' },
        { value: 5, label: 'Maximum - daily grooming routine' }
      ]
    }
  ]

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleClose =() => {
    document.body.style.overflow = 'unset'
    onClose()
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!isClient) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Find Your Match</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm font-semibold text-gray-600 mb-3">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-purple-600">{Math.round(progress)}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transition-all duration-700 ease-out rounded-full shadow-lg shadow-purple-500/50"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-3 sm:p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-purple-50"
                type="button"
              >
                <span className="text-sm sm:text-base">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {currentQuestion > 0 ? (
            <button
              onClick={goBack}
              className="bg-gray-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base"
              type="button"
            >
              Previous Question
            </button>
          ) : (
            <div></div>
          )}

          <div className="text-sm text-gray-500">
            Click outside to close
          </div>
        </div>
      </div>
    </div>
  )
}

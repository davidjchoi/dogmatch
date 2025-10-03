'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import BreedCard from './components/BreedCard'
import PersonalityQuiz from './components/PersonalityQuiz'
import { Breeds } from './data/DogBreeds'
import Link from 'next/link'


export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [matchedBreeds, setMatchedBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredBreeds = Breeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    breed.group.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleQuizComplete = (userAnswers) => {
    const matches = calculateMatches(userAnswers)
    setMatchedBreeds(matches)
    setShowQuiz(false)

    setTimeout(() =>{
      document.getElementById('matches')?.scrollIntoView({ behavior : 'smooth', block: 'start'}, 100)
    })
  }

  const calculateMatches = (answers) => {
    return Breeds.map(breed => {
      let score = 0
      let maxScore = 0

      // Activity level matching
      maxScore += 3
      if (Math.abs(answers.activityLevel - breed.activityLevel) <= 1) score += 3
      else if (Math.abs(answers.activityLevel - breed.activityLevel) <= 2) score += 1

      // Experience level matching
      maxScore += 3
      if (answers.experience >= breed.experienceRequired) score += 3
      else if (answers.experience >= breed.experienceRequired - 1) score += 1

      // Space matching
      maxScore += 2
      if (breed.spaceNeeds <= answers.livingSpace) score += 2

      // Time availability
      maxScore += 3
      if (answers.hoursAtHome >= breed.companionshipNeeds) score += 3
      else if (answers.hoursAtHome >= breed.companionshipNeeds - 2) score += 1

      // Grooming commitment
      maxScore += 2
      if (answers.groomingCommitment >= breed.groomingNeeds) score += 2

      const percentage = Math.round((score / maxScore) * 100)
      return { ...breed, matchPercentage: percentage }
    })
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 6)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
    {/* Animated background elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    {/* Header */}
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-purple-500/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 sm:py-6">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-2 sm:p-3 rounded-2xl text-white text-2xl sm:text-3xl">
            🐕
          </div>
        </div>
        <Link href='/'>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            PawMatch
          </h1>
          <p className="text-xs text-blue-500 hidden sm:block">AI-Powered Breed Matching</p>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Link
          href="/about"
          className="hidden sm:block text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-300"
        >
          About
        </Link>
        <Link href='/contact' className= "hidden sm:block text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-300">
        Contact</Link>
        <Link href='blog' className= "hidden sm:block text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-300">
        Blog</Link>

        <button
          onClick={() => setShowQuiz(true)}
          className="group relative px-4 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          type="button"
        >
          <span className="relative z-10 text-sm sm:text-base flex items-center gap-2">
            <span className="hidden sm:inline">✨</span>
            Find My Match
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </div>
</header>

    <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-20">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs sm:text-sm font-semibold border border-purple-200/50">
            AI-Powered Matching System
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
          Find Your Perfect
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Furry Companion
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Our intelligent algorithm analyzes your lifestyle, personality, and living situation to match you with the perfect dog breed.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">200+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Dog Breeds</div>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">98%</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Match Rate</div>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-xl">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">10k+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Happy Owners</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-12 sm:mb-16">
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for breeds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-white/40 focus:border-purple-400 focus:outline-none text-base sm:text-lg shadow-2xl shadow-purple-500/10 transition-all duration-300 placeholder:text-gray-400"
            />
            <div className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl sm:text-2xl">
              🔍
            </div>
          </div>
        </div>
      </div>

      {/* Matched Breeds Section */}
      {matchedBreeds.length > 0 && (
        <section id="matches" className="mb-16 sm:mb-20 scroll-mt-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs sm:text-sm font-semibold border border-green-200/50">
                ✨ Personalized Results
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Perfect Matches
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Based on your lifestyle and preferences, here are your top breed recommendations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {matchedBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} isMatch={true} />
            ))}
          </div>
        </section>
      )}

      {/* All Breeds Section */}
      <section>
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {matchedBreeds.length > 0 ? 'Explore All Breeds' : 'Popular Dog Breeds'}
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive collection of dog breeds
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      </section>
    </main>

    {/* Quiz Modal */}
    {mounted && showQuiz && (
      <PersonalityQuiz
        onComplete={handleQuizComplete}
        onClose={() => setShowQuiz(false)}
      />
    )}

  </div>
)
}

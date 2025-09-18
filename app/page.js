"use client";

import { useState } from 'react'
import Head from 'next/head'
import BreedCard from './components/BreedCard'
import PersonalityQuiz from './components/PersonalityQuiz'
import { dogBreeds } from './data/DogBreeds'

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [matchedBreeds, setMatchedBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBreeds = dogBreeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    breed.group.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleQuizComplete = (userAnswers) => {
    const matches = calculateMatches(userAnswers)
    setMatchedBreeds(matches)
    setShowQuiz(false)
  }

  const calculateMatches = (answers) => {
    return dogBreeds.map(breed => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>PawMatch - Find Your Perfect Dog Breed</title>
        <meta name="description" content="Discover the perfect dog breed that matches your lifestyle and personality" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">🐕</div>
              <h1 className="text-3xl font-bold text-gray-800">PawMatch</h1>
            </div>
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Find My Match
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Furry Friend</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the dog breed that perfectly matches your lifestyle, personality, and living situation with our intelligent matching system.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search breeds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg shadow-lg"
            />
            <div className="absolute right-4 top-4 text-gray-400">🔍</div>
          </div>
        </div>

        {/* Matched Breeds Section */}
        {matchedBreeds.length > 0 && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Your Perfect Matches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchedBreeds.map((breed) => (
                <BreedCard key={breed.id} breed={breed} isMatch={true} />
              ))}
            </div>
          </section>
        )}

        {/* All Breeds Section */}
        <section>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {matchedBreeds.length > 0 ? 'All Dog Breeds' : 'Popular Dog Breeds'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
        </section>
      </main>

      {/* Quiz Modal */}
      {showQuiz && (
        <PersonalityQuiz
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  )
}

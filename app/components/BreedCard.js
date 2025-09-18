'use client'

import { useState } from 'react'

export default function BreedCard({ breed, isMatch = false }) {
  const [showDetails, setShowDetails] = useState(false)

  const ActivityBars = ({ level, label }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-xs text-gray-500">{level}/5</span>
      </div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 w-full rounded-full ${
              i <= level ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${isMatch ? 'ring-4 ring-purple-400' : ''}`}>
      {isMatch && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 font-semibold">
          {breed.matchPercentage}% Match!
        </div>
      )}

      <div className="relative">
        <img
          src={breed.image}
          alt={breed.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {breed.group}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{breed.name}</h3>
        <p className="text-gray-600 mb-4">{breed.description}</p>

        <div className="space-y-2 mb-4">
          <ActivityBars level={breed.activityLevel} label="Activity Level" />
          <ActivityBars level={breed.groomingNeeds} label="Grooming Needs" />
          <ActivityBars level={breed.companionshipNeeds} label="Companionship" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <span className="font-semibold text-gray-700">Size:</span>
            <div className="text-gray-600">{breed.size}</div>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Lifespan:</span>
            <div className="text-gray-600">{breed.lifespan}</div>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>

        {showDetails && (
          <div className="mt-6 space-y-4 border-t pt-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Temperament</h4>
              <div className="flex flex-wrap gap-2">
                {breed.temperament.map((trait, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Health Considerations</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {breed.healthConsiderations.map((consideration, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    {consideration}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ideal For</h4>
              <p className="text-sm text-gray-600">{breed.idealFor}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

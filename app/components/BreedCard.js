'use client'

import { useState, useEffect } from 'react'

export default function BreedCard({ breed, isMatch = false }) {
  const [showDetails, setShowDetails] = useState(false)
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setImageLoading(true);
        const response = await fetch(`https://dog.ceo/api/breed/${breed.apiBreed}/images/random/1`);
        const data = await response.json();

        if (data.status === 'success') {
          setImageUrl(data.message);
        }
      }
      catch (error) {
        console.error('Error fetching dog image:', error)
        setImageUrl('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop'); // Fallback image
      }
      finally {
        setImageLoading(false);
      }
    }
    if (breed.apiBreed) {
      fetchDogImage();
    }
  }, [breed.apiBreed]);

  const ActivityBars = ({ level, label }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <span className="text-xs font-bold text-purple-600">{level}/5</span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2.5 w-full rounded-full transition-all duration-500 ${
              i <= level
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${isMatch ? 'opacity-50' : ''}`}></div>

      <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border-2 ${
        isMatch
          ? 'border-purple-300 shadow-2xl shadow-purple-500/20'
          : 'border-white/40 shadow-xl hover:shadow-2xl'
      }`}>
        {isMatch && (
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient"></div>
            <div className="relative text-white text-center py-3 font-bold text-base sm:text-lg flex items-center justify-center gap-2">
              <span className="text-xl">✨</span>
              {breed.matchPercentage}% Match!
              <span className="text-xl">✨</span>
            </div>
          </div>
        )}

<div className="relative overflow-hidden">
          {imageLoading ? (
            <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={breed.name}
              className="w-full h-56 sm:h-64 object-contain transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <div className="backdrop-blur-xl bg-white/90 rounded-2xl px-4 py-2 text-sm font-bold text-gray-800 shadow-xl border border-white/40">
              {breed.group}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
            {breed.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{breed.description}</p>

          <div className="space-y-3 mb-6">
            <ActivityBars level={breed.activityLevel} label="Activity Level" />
            <ActivityBars level={breed.groomingNeeds} label="Grooming Needs" />
            <ActivityBars level={breed.companionshipNeeds} label="Companionship" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Size</span>
              <div className="text-sm font-bold text-gray-800 mt-1">{breed.size}</div>
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Lifespan</span>
              <div className="text-sm font-bold text-gray-800 mt-1">{breed.lifespan}</div>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02]"
            type="button"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {showDetails ? (
                <>Hide Details <span className="group-hover/btn:translate-y-1 transition-transform">↑</span></>
              ) : (
                <>View Details <span className="group-hover/btn:translate-y-1 transition-transform">↓</span></>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>

          {showDetails && (
            <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent border border-purple-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <span className="text-xl">🎭</span>
                  Temperament
                </h4>
                <div className="flex flex-wrap gap-2">
                  {breed.temperament.map((trait, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-xl text-sm font-semibold border border-purple-200/50 hover:scale-105 transition-transform"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <span className="text-xl">🏥</span>
                  Health Considerations
                </h4>
                <ul className="space-y-3">
                  {breed.healthConsiderations.map((consideration, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-transparent border border-green-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
                  <span className="text-xl">✨</span>
                  Ideal For
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">{breed.idealFor}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

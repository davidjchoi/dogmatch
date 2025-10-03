// app/about/page.js
'use client'
import Link from 'next/link'

export default function About() {
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

            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-2 sm:p-3 rounded-2xl text-white text-2xl sm:text-3xl">
                  🐕
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PawMatch
                </h1>
                <p className="text-xs text-blue-500 hidden sm:block">AI-Powered Breed Matching</p>
              </div>
            </Link>

      {/* Navigation bar */}
            <div className = "flex items-center gap-4">
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
            <Link
              href="/"
              className="group relative px-4 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 text-sm sm:text-base flex items-center gap-2">
                <span className="hidden sm:inline">🏠</span>
                Back Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold border border-purple-200/50">
              About Us
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Connecting People with
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Their Perfect Companions
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe every person deserves to find their ideal four-legged friend
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At PawMatch, we're passionate about helping people find the perfect dog breed that matches their lifestyle, personality, and living situation. We understand that choosing a dog is a life-changing decision, and we're here to make that process easier and more informed.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our intelligent matching algorithm considers multiple factors including activity level, living space, experience, time availability, and grooming commitment to provide personalized breed recommendations.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-2xl">
                  <div className="text-6xl mb-4 text-center">🐾</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Choose PawMatch?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">AI-powered breed matching algorithm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">Comprehensive breed database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">Personalized recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">Detailed breed information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finding your perfect match is easy with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="text-5xl mb-4">📝</div>
                <div className="text-sm font-bold text-purple-600 mb-2">STEP 01</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Take the Quiz</h4>
                <p className="text-gray-600 leading-relaxed">
                  Answer 5 simple questions about your lifestyle, activity level, living space, and experience with dogs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="text-5xl mb-4">🤖</div>
                <div className="text-sm font-bold text-purple-600 mb-2">STEP 02</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Get Matched</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our AI algorithm analyzes your answers and calculates compatibility scores with different dog breeds.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="text-5xl mb-4">❤️</div>
                <div className="text-sm font-bold text-purple-600 mb-2">STEP 03</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Find Your Match</h4>
                <p className="text-gray-600 leading-relaxed">
                  Review your top matches with detailed breed information, temperament, and health considerations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-white/40 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    200+
                  </div>
                  <div className="text-gray-600 font-semibold">Dog Breeds</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    10k+
                  </div>
                  <div className="text-gray-600 font-semibold">Happy Matches</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-gray-600 font-semibold">Match Rate</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    5min
                  </div>
                  <div className="text-gray-600 font-semibold">Average Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h4>
              <p className="text-gray-600">
                We provide scientifically-backed, accurate breed information to help you make informed decisions.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">💝</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Compassion</h4>
              <p className="text-gray-600">
                We care deeply about the welfare of both dogs and their future owners.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We continuously improve our matching algorithm to provide better recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border-2 border-white/40 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ready to Find Your Perfect Match?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Take our quick quiz and discover which dog breeds are the perfect fit for your lifestyle.
              </p>
              <Link
                href="/"
                className="inline-block group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Start Matching Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/20 backdrop-blur-xl bg-white/70 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">Made with ❤️ for dog lovers everywhere</p>
            <p className="text-sm">© 2025 PawMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// app/about/page.js
'use client'
import Link from 'next/link'

export default function Contact() {
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
              Contact Us
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get in touch
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient mt-200">
              With PawMatch Team
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           We're here to help and answer any questions you might have. We look forward hearing from you!
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
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contacts</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">Email: </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 text-xl">✓</span>
                      <span className="text-gray-700">Phone: </span>
                    </li>
                  </ul>
                </div>
              </div>
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

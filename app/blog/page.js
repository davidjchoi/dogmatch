// app/blog/page.js
'use client'

import Link from 'next/link'
import { useState } from 'react'

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Dog Owners",
    excerpt: "Bringing home your first dog is exciting! Here are the essential tips every new dog owner should know to ensure a smooth transition.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    readTime: "5 min read",
    tags: ["First-time owners", "Training", "Puppy care"]
  },
  {
    id: 2,
    title: "Understanding Dog Body Language: A Complete Guide",
    excerpt: "Learn to read your dog's signals and understand what they're trying to communicate through their body language and behavior.",
    author: "Dr. Michael Chen",
    date: "March 12, 2025",
    category: "Behavior",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    readTime: "8 min read",
    tags: ["Behavior", "Communication", "Training"]
  },
  {
    id: 3,
    title: "Best Dog Breeds for Apartment Living",
    excerpt: "Living in an apartment doesn't mean you can't have a dog! Discover which breeds thrive in smaller spaces.",
    author: "Emma Williams",
    date: "March 10, 2025",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop",
    readTime: "6 min read",
    tags: ["Apartment living", "Small breeds", "Lifestyle"]
  },
  {
    id: 4,
    title: "The Ultimate Guide to Dog Nutrition",
    excerpt: "Everything you need to know about feeding your dog a balanced, healthy diet for optimal health and longevity.",
    author: "Dr. Lisa Martinez",
    date: "March 8, 2025",
    category: "Health",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop",
    readTime: "10 min read",
    tags: ["Nutrition", "Health", "Diet"]
  },
  {
    id: 5,
    title: "How to Socialize Your Puppy: A Step-by-Step Guide",
    excerpt: "Proper socialization is crucial for your puppy's development. Learn the best practices and timelines for socializing your new friend.",
    author: "James Anderson",
    date: "March 5, 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
    readTime: "7 min read",
    tags: ["Puppy", "Socialization", "Training"]
  },
  {
    id: 6,
    title: "Top 5 Dog Parks in Major Cities",
    excerpt: "Discover the best dog parks across the country where your furry friend can run, play, and socialize with other dogs.",
    author: "Rachel Green",
    date: "March 3, 2025",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    readTime: "5 min read",
    tags: ["Parks", "Activities", "Lifestyle"]
  },
  {
    id: 7,
    title: "Common Dog Health Issues and Prevention",
    excerpt: "Learn about the most common health problems dogs face and how to prevent them through proper care and regular vet visits.",
    author: "Dr. Michael Chen",
    date: "March 1, 2025",
    category: "Health",
    image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=600&h=400&fit=crop",
    readTime: "9 min read",
    tags: ["Health", "Prevention", "Veterinary care"]
  },
  {
    id: 8,
    title: "The Benefits of Adopting Senior Dogs",
    excerpt: "Senior dogs make wonderful companions! Discover why adopting an older dog might be the perfect choice for your family.",
    author: "Emma Williams",
    date: "February 28, 2025",
    category: "Adoption",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=400&fit=crop",
    readTime: "6 min read",
    tags: ["Adoption", "Senior dogs", "Rescue"]
  },
  {
    id: 9,
    title: "Dog Training Mistakes to Avoid",
    excerpt: "Even experienced owners make training mistakes. Learn what to avoid to ensure your dog's training is effective and positive.",
    author: "James Anderson",
    date: "February 25, 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    readTime: "7 min read",
    tags: ["Training", "Mistakes", "Tips"]
  }
]

const categories = ["All", "Training", "Health", "Lifestyle", "Behavior", "Adoption"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
                  Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold border border-purple-200/50">
              📚 Our Blog
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Dog Care
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Tips & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert advice, training tips, and everything you need to know about caring for your furry friend
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-white/40 focus:border-purple-400 focus:outline-none text-lg shadow-2xl shadow-purple-500/10 transition-all duration-300 placeholder:text-gray-400"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border-2 border-white/40 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="backdrop-blur-xl bg-white/90 rounded-full px-4 py-2 text-sm font-bold text-gray-800 shadow-xl border border-white/40">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      👤 {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      ⏱️ {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date & Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1 group/btn">
                      Read More
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <section className="mt-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-white/40 shadow-2xl text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest dog care tips, breed insights, and exclusive content delivered to your inbox weekly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-400 focus:outline-none"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
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

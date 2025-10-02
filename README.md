# 🐕 PawMatch - AI-Powered Dog Breed Matching

![PawMatch Banner](https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=400&fit=crop)

**PawMatch** is an intelligent web application that helps users find their perfect dog breed match based on lifestyle, personality, and living situation. Built with Next.js 15 and powered by AI-driven matching algorithms.

## ✨ Features

- 🤖 **AI-Powered Matching Algorithm** - Intelligent breed recommendations based on multiple lifestyle factors
- 📊 **Interactive Quiz** - 5-question personality and lifestyle assessment
- 🐾 **Comprehensive Breed Database** - 30+ dog breeds with detailed information
- 🖼️ **Real Dog Images** - Integration with Dog CEO API for authentic breed photos
- 🎨 **Modern UI/UX** - Beautiful glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🔍 **Search Functionality** - Quick breed search by name or group

## 🚀 Demo

Visit the live demo: [PawMatch Live](https://your-demo-url.vercel.app) *(Update with your deployment URL)*

## 📸 Screenshots

### Home Page
Modern landing page with breed cards and search functionality

### Quiz Interface
Interactive 5-question quiz with progress tracking

### Breed Matches
Personalized breed recommendations with match percentages

### About Page
Learn about our mission and how PawMatch works

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.5.3](https://nextjs.org/)
- **Language:** JavaScript (ES6+)
- **Styling:** [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **UI/UX:** Custom animations, Glassmorphism, Gradient designs
- **API Integration:** [Dog CEO API](https://dog.ceo/dog-api/)
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** 10.0 or higher (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/davidjchoi/dogmatch.git
cd dogmatch
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dogmatch/
├── app/
│   ├── about/
│   │   └── page.js              # About page
│   ├── components/
│   │   ├── BreedCard.js         # Breed display card component
│   │   └── PersonalityQuiz.js   # Quiz modal component
│   ├── data/
│   │   └── dogBreeds.js         # Dog breeds database
│   ├── page.js                  # Home page
│   ├── layout.js                # Root layout
│   └── globals.css              # Global styles & animations
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎯 How It Works

### 1. User Takes the Quiz
Users answer 5 questions about their lifestyle:
- Activity level (1-5)
- Experience with dogs (1-4)
- Living space (1-5)
- Hours at home per day
- Grooming commitment (1-5)

### 2. AI Matching Algorithm
The algorithm calculates compatibility scores based on:
- **Activity Level Matching** (30% weight)
- **Experience Requirements** (30% weight)
- **Space Needs** (20% weight)
- **Time Availability** (30% weight)
- **Grooming Commitment** (20% weight)

### 3. Personalized Results
Users receive:
- Top 6 breed matches with percentage scores
- Detailed breed information
- Temperament traits
- Health considerations
- Ideal owner profiles

## 🎨 Design Features

- **Glassmorphism** - Frosted glass effects on cards and headers
- **Gradient Animations** - Smooth color transitions
- **Floating Blobs** - Animated background elements
- **Hover Effects** - Interactive card animations
- **Progress Tracking** - Visual quiz progress indicators
- **Responsive Design** - Mobile-first approach

## 🔌 API Integration

### Dog CEO API
Fetches real dog images for each breed:
```javascript
fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
```

**Features:**
- No API key required
- Free unlimited requests
- High-quality images
- 200+ breed coverage

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Click "Deploy"
- Your app will be live in minutes!

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
- Drag and drop the `.next` folder to [Netlify](https://netlify.com)
- Or connect your GitHub repository

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Adding New Breeds

Edit `app/data/dogBreeds.js`:
```javascript
{
  id: 31,
  name: "Your Breed Name",
  apiBreed: "breed/name", // Dog CEO API breed path
  group: "Working",
  size: "Large (50-80 lbs)",
  lifespan: "10-12 years",
  activityLevel: 4,
  groomingNeeds: 3,
  experienceRequired: 2,
  spaceNeeds: 3,
  companionshipNeeds: 8,
  description: "Breed description...",
  temperament: ["Trait1", "Trait2"],
  healthConsiderations: ["Issue1", "Issue2"],
  idealFor: "Ideal owner description"
}
```

### Modifying Colors

Update `tailwind.config.js` or use Tailwind's built-in colors in your components.

### Changing Quiz Questions

Edit `app/components/PersonalityQuiz.js` to add/modify questions.

## 🐛 Troubleshooting

### Styles Not Showing
```bash
# Reinstall Tailwind CSS
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17 postcss@8.5.3 autoprefixer@10.4.20
npx tailwindcss init -p

# Restart dev server
npm run dev
```

### Images Not Loading
- Check Dog CEO API status
- Verify breed names match API format
- Clear browser cache

### 404 on Routes
- Ensure folder structure matches: `app/routename/page.js`
- Restart development server
- Clear `.next` cache: `rm -rf .next`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**David Choi**
- GitHub: [@davidjchoi](https://github.com/davidjchoi)
- Project: [dogmatch](https://github.com/davidjchoi/dogmatch)

## 🙏 Acknowledgments

- [Dog CEO API](https://dog.ceo/dog-api/) - For providing free dog images
- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS
- [Unsplash](https://unsplash.com/) - For beautiful fallback images
- Dog breed information compiled from various reputable sources

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/davidjchoi/dogmatch/issues)
- Contact: [your-email@example.com](mailto:your-email@example.com)

## 🔮 Future Enhancements

- [ ] User accounts and saved matches
- [ ] Breed comparison feature
- [ ] Integration with pet adoption APIs
- [ ] Social sharing functionality
- [ ] More detailed breed information
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Breed favorites system
- [ ] Email match results
- [ ] Advanced filtering options

---

Made with ❤️ and 🐕 for dog lovers everywhere

**Star ⭐ this repository if you find it helpful!**

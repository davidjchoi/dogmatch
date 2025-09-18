import './globals.css'

export const metadata = {
  title: 'PawMatch - Find Your Perfect Dog Breed',
  description: 'Discover the perfect dog breed that matches your lifestyle and personality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

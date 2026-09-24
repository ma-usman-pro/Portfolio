import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Loader from '@/components/Loader'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

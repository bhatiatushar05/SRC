// Custom hook for banner slider functionality
import { useState, useEffect, useCallback } from 'react'

export const useBannerSlider = (banners = []) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (banners.length > 0 && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length)
      }, 10000) // Change slide every 10 seconds

      return () => clearInterval(interval)
    }
  }, [banners.length, isAutoPlaying])

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (banners.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }
  }, [banners.length])

  const prevSlide = useCallback(() => {
    if (banners.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
    }
  }, [banners.length])

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < banners.length) {
      setCurrentSlide(index)
    }
  }, [banners.length])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev)
  }, [])

  return {
    currentSlide,
    isAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay
  }
}

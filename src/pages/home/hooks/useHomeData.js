// Custom hook for home page data management
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeService } from '../services/homeService.js'
import { setHomeData } from '../store/homeSlice.js'

export const useHomeData = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const homeData = useSelector(state => state.home.homeData)

  const loadHomeData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await HomeService.getHomeData()
      
      if (result.success) {
        dispatch(setHomeData(result.data))
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  const refreshData = useCallback(() => {
    loadHomeData()
  }, [loadHomeData])

  useEffect(() => {
    loadHomeData()
  }, [loadHomeData])

  return {
    homeData,
    loading,
    error,
    refreshData
  }
}

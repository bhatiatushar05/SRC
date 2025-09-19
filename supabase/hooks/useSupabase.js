// Custom React Hooks for Supabase Integration
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../config.js'

// Hook for authentication state
export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }, [])

  const signUp = useCallback(async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  }, [])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }, [])

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut
  }
}

// Hook for real-time subscriptions
export const useRealtime = (table, callback, filter = null) => {
  useEffect(() => {
    let subscription

    const setupSubscription = () => {
      let query = supabase
        .channel(`${table}_changes`)
        .on('postgres_changes', 
          { 
            event: '*', 
            schema: 'public', 
            table: table,
            ...(filter && { filter })
          }, 
          callback
        )
        .subscribe()

      subscription = query
    }

    setupSubscription()

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [table, callback, filter])
}

// Hook for data fetching with loading states
export const useSupabaseQuery = (queryFn, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await queryFn()
      
      if (result.success) {
        setData(result.data)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, dependencies)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}

// Hook for form submissions
export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const submitForm = useCallback(async (submitFn) => {
    try {
      setIsSubmitting(true)
      setError(null)
      const result = await submitFn()
      
      if (!result.success) {
        setError(result.error)
      }
      
      return result
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  return { isSubmitting, error, submitForm }
}

// Hook for file uploads
export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)

  const uploadFile = useCallback(async (uploadFn) => {
    try {
      setUploading(true)
      setError(null)
      setProgress(0)
      
      const result = await uploadFn()
      
      if (!result.success) {
        setError(result.error)
      }
      
      return result
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setUploading(false)
      setProgress(0)
    }
  }, [])

  return { uploading, progress, error, uploadFile }
}

// Hook for pagination
export const usePagination = (queryFn, pageSize = 10) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const fetchPage = useCallback(async (pageNum = 0) => {
    try {
      setLoading(true)
      setError(null)
      
      const result = await queryFn(pageNum, pageSize)
      
      if (result.success) {
        if (pageNum === 0) {
          setData(result.data)
        } else {
          setData(prev => [...prev, ...result.data])
        }
        
        setHasMore(result.data.length === pageSize)
        setPage(pageNum)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [queryFn, pageSize])

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPage(page + 1)
    }
  }, [loading, hasMore, page, fetchPage])

  const refresh = useCallback(() => {
    setPage(0)
    setData([])
    fetchPage(0)
  }, [fetchPage])

  useEffect(() => {
    fetchPage(0)
  }, [fetchPage])

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    refresh
  }
}

// Hook for search functionality
export const useSearch = (searchFn, debounceMs = 300) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true)
        setError(null)
        
        const result = await searchFn(query)
        
        if (result.success) {
          setResults(result.data)
        } else {
          setError(result.error)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }, debounceMs)

    return () => clearTimeout(timeoutId)
  }, [query, searchFn, debounceMs])

  return {
    query,
    setQuery,
    results,
    loading,
    error
  }
}

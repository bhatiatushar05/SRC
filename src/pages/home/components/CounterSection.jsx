// Counter Section Component for Home Page
import { useSelector, useDispatch } from 'react-redux'
import { selectCounters, updateCounter } from '../store/homeSlice.js'

const CounterSection = () => {
  const counters = useSelector(selectCounters)
  const dispatch = useDispatch()

  // Handle scroll events for counter animations
  const handleScroll = () => {
    if (window.scrollY > 500) {
      dispatch(updateCounter({ type: 'internship', value: 100 }))
      dispatch(updateCounter({ type: 'volunteer', value: 400 }))
      dispatch(updateCounter({ type: 'pledge', value: 20 }))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-primary-600 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">{counters.internship}</div>
            <div className="text-lg font-light">Internships</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">{counters.volunteer}</div>
            <div className="text-lg font-light">Volunteers</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">{counters.pledge}</div>
            <div className="text-lg font-light">Pledges</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterSection

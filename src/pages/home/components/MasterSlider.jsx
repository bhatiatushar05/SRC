// Master Slider Component for Home Page
import { useBannerSlider } from '../hooks/useBannerSlider.js'

const MasterSlider = ({ masterList = [] }) => {
  const {
    currentSlide,
    isAutoPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay
  } = useBannerSlider(masterList)

  if (!masterList.length) {
    return (
      <div className="h-96 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading slider...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-gray-800 overflow-y-auto">
          <div className="p-2">
            {masterList.map((item, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-3 m-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-orange-500' 
                    : 'bg-gray-900 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = '/static/placeholder.png'
                    }}
                  />
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-light text-sm leading-tight">{item.title}</h3>
                    <p className="text-white text-xs opacity-80 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative h-screen overflow-hidden">
          <div className="h-full relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${masterList[currentSlide]?.image})`,
              }}
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-8">
              <div className="container mx-auto text-center">
                <h2 className="text-white text-xl font-light mb-4">
                  {masterList[currentSlide]?.title}
                </h2>
                <p className="text-white text-base font-light max-w-4xl mx-auto">
                  {masterList[currentSlide]?.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterSlider

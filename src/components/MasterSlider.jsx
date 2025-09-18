import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { selectHomeData } from '../store/slices/mainSlice';

const MasterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const homeData = useSelector(selectHomeData);
  
  const masterList = homeData?.master_list || [];

  useEffect(() => {
    if (masterList.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % masterList.length);
      }, 10000); // Change slide every 10 seconds

      return () => clearInterval(interval);
    }
  }, [masterList.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % masterList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + masterList.length) % masterList.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!masterList.length) {
    return (
      <div className="h-96 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading slider...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Desktop Slider */}
      <div className="hidden md:block relative">
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-1/6 bg-primary-600 h-screen overflow-y-auto">
            <div className="space-y-2 p-2">
              {masterList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`p-3 m-2 rounded-lg cursor-pointer transition-colors ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-black hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg"
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

          {/* Main Slider */}
          <div className="flex-1 relative h-screen overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {masterList.map((item, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-8">
                    <div className="container mx-auto text-center">
                      <h2 className="text-white text-xl font-light mb-4">
                        {item.title}
                      </h2>
                      <p className="text-white text-base font-light max-w-4xl mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative h-96">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {masterList.map((item, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                <h2 className="text-white text-lg font-light mb-2">
                  {item.title}
                </h2>
                <p className="text-white text-sm font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {masterList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterSlider;


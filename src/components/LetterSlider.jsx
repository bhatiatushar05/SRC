import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LetterSlider = ({ title, path, length, actual }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const getImagePath = (index) => {
    return `/static/letters/${path}/${index}.jpg`;
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-textColor mb-4">{title}</h3>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-w-3 aspect-h-4 relative">
          <img
            src={getImagePath(currentIndex)}
            alt={`${title} ${currentIndex + 1}`}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.src = '/static/placeholder.png';
            }}
          />
          
          {/* Navigation Arrows */}
          {length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
        
        {/* Counter */}
        <div className="p-3 bg-primary-600 text-white">
          <p className="text-sm">
            {currentIndex + 1} of {actual || length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterSlider;


import { useEffect } from 'react';

const ConsultingAndAdvisory = () => {
  useEffect(() => {
    document.title = 'Consulting / Advisory - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Office Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/ca.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Consulting / Advisory</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              CSR of various Corporates need direction. They have an honest desire to deal with challenges that concern people. Our customized and qualified 
              consultations cover a wide range of subjects – social in a broader sense including education, and national including environment and health. 
              Sustainability is our focus. We have a holistic vision, and are observant of the fact that action of today shouldn't cost humanity in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingAndAdvisory;

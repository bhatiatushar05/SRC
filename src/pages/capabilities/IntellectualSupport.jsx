import { useEffect } from 'react';

const IntellectualSupport = () => {
  useEffect(() => {
    document.title = 'Intellectual Support - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Lightbulb and Diagrams Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/is.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Intellectual Support</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Your company is successful and you want to make a contribution to mankind. You have an 
              ambiguous guide and are looking for ideas and ways to implement them. You can count our 
              intellectual support, which comes from a highly motivated team of volunteers/contributors 
              who have a proven record of experience and expertise in their respective fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntellectualSupport;
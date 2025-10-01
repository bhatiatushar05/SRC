import { useEffect } from 'react';

const DigitalDocumentation = () => {
  useEffect(() => {
    document.title = 'Digital Documentation - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Tech Devices Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/dd.jpg)',
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Digital Documentation</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Aesthetic documentation of socially and economically pertinent actions multiplies the good 
              effect manifold. Research Books, and E-books offer eternal life and value to an event or 
              action. We have mastered the art of creating such books to the perfection. From photography 
              to content development and designing and printing – we do it all. We also have expertise to 
              transform the research book into an Ebook. Which is also used as a coffee table book, to 
              present the illustrious journey of the organisation, their culture and contribution to the society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDocumentation;
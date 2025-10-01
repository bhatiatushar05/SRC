import { useEffect } from 'react';

const Research = () => {
  useEffect(() => {
    document.title = 'Research - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Books Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/research.jpg)',
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Research</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              In this ever-changing world, companies need to think fast and stay agile. And that requires 
              strategies that work in the real world. With experience across the value chain, end-to-end, we 
              research for organizations to create strategies that come not just from knowing, but from the 
              know-how of doing. Our integrated model enables 360° value creation by giving our strategists 
              the advantage of SRC insights from AI and data science and deep industry expertise, combined 
              with the experience of efficiently operating business functions and Corporate Social 
              responsibility, optimizing and running supply chains in an eco friendly way, designing and 
              implementing technology, and building resilient operating models and cultures for a sustainable 
              environment and society
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
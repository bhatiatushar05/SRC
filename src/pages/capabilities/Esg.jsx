import { useEffect } from 'react';

const Esg = () => {
  useEffect(() => {
    document.title = 'Environment, Social & Governance - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Green Globe Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/esg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-95 rounded-lg p-8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Environment, Social & Governance</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              The E in ESG, natural measures, incorporates the energy your organisation takes in and the 
              waste it releases, the assets it needs, and the ramifications for living creatures therefore. S, 
              social models, addresses the connections your organisation has and the standing it 
              encourages with individuals and establishments in the networks where you work together. G, 
              administration, is the inward arrangement of practices, controls, and methods your 
              organisation takes on to administer itself, settle on viable choices, consent to the law, and 
              address the issues of outer partners. Similarly as ESG is an inseparable piece of how you work 
              together, its individual components are themselves interlaced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esg;
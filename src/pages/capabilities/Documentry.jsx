import { useEffect } from 'react';

const Documentry = () => {
  useEffect(() => {
    document.title = 'Documentary - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Film Strip Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/doc.jpg)',
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Documentary</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Audio-visual awareness campaigns and event documentation IN DEMAND challenges for 
              organisations. We collaborate with various media houses to avail their contribution to 
              draft/craft documentaries to screenplay the actions/activities. Not only the equipment, but the 
              skilled manpower including copywriting, editing, designing also are the best and in-house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentry;
import { useEffect } from 'react';

const MediaAdvocacy = () => {
  useEffect(() => {
    document.title = 'Media Advocacy - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Media Devices Background */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/static/cap/ma.png)',
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">Media Advocacy</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Using all kinds of medium – electronic, print, social media – to help promote the objectives or 
              goals of an organization or a company is what we do most effectively as the facilitator of 
              Media Advocacy. The challenge may be forming perception, building positive opinion, 
              mitigating negative publicity etc. in the community...with our communication strategy, we 
              motivate community members and policy makers to get involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaAdvocacy;
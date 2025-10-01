import { useState, useEffect } from 'react';

const Advisory = () => {
  const [activeCategory, setActiveCategory] = useState('SOCIAL');

  useEffect(() => {
    document.title = 'Advisory Board - Social Responsibility Council';
  }, []);

  const categories = [
    'SOCIAL',
    'ENVIRONMENT', 
    'TRAFFIC MOBILITY',
    'SECURITY',
    'EDUCATION',
    'INFRASTRUCTURE'
  ];

  const advisoryMembers = {
    SOCIAL: [
      {
        id: 1,
        name: 'Arun Khurana',
        image: '/static/advisory/1-min-2.jpg',
        category: 'SOCIAL'
      },
      {
        id: 2,
        name: 'S. P. Singh',
        image: '/static/advisory/77.jpg',
        category: 'SOCIAL'
      },
      {
        id: 3,
        name: 'R Ranjan Rashmi',
        image: '/static/advisory/3-new.jpg',
        category: 'SOCIAL',
        hasMoreInfo: true
      },
      {
        id: 4,
        name: 'Sutanu Sinha',
        image: '/static/advisory/9.png',
        category: 'SOCIAL'
      },
      {
        id: 5,
        name: 'Ghanshyam Goel',
        image: '/static/advisory/Dr._Rawail_Singh.jpg',
        category: 'SOCIAL'
      },
      {
        id: 6,
        name: 'Vivek Narayan Sharma',
        image: '/static/advisory/SP_Sing_copy.jpg',
        category: 'SOCIAL'
      }
    ],
    ENVIRONMENT: [
      {
        id: 7,
        name: 'Environmental Expert 1',
        image: '/static/advisory/Faculty-Proforma_2019-20.bmp',
        category: 'ENVIRONMENT'
      },
      {
        id: 8,
        name: 'Environmental Expert 2',
        image: '/static/advisory/new_resume2020.bmp',
        category: 'ENVIRONMENT'
      }
    ],
    'TRAFFIC MOBILITY': [
      {
        id: 9,
        name: 'Traffic Expert 1',
        image: '/static/advisory/WhatsApp_Image_2021-09-06_at_2.39.27_PM.jpeg',
        category: 'TRAFFIC MOBILITY'
      }
    ],
    SECURITY: [],
    EDUCATION: [],
    INFRASTRUCTURE: []
  };

  const currentMembers = advisoryMembers[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-textColor text-center mb-16">Advisory</h1>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-medium text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-textColor text-white border-b-2 border-textColor'
                    : 'text-gray-600 hover:text-textColor border-b-2 border-transparent hover:border-textColor'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Members Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {currentMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        e.target.src = '/static/placeholder.png';
                      }}
                    />
                    {member.hasMoreInfo && (
                      <div className="absolute top-4 right-4">
                        <button className="bg-black bg-opacity-70 text-white px-4 py-2 text-sm font-medium rounded hover:bg-opacity-80 transition-opacity">
                          SEE MORE INFO
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-textColor mb-2">
                      {member.name}
                    </h3>
                    {member.position && (
                      <p className="text-gray-600 text-sm">
                        {member.position}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No advisory members available for {activeCategory} category.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Advisory;
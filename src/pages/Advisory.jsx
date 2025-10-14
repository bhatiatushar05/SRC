import { useState, useEffect } from 'react';

const Advisory = () => {
  const [activeCategory, setActiveCategory] = useState('SOCIAL');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Advisory Board - Social Responsibility Council';
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

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
        position: 'Founder',
        image: '/static/advisory/1-min-2.jpg',
        category: 'SOCIAL',
        biography: "Choose the right path without worrying about the result or the effort. Create values for social and national exigencies. Analyze mistakes in pursuit of excellence. Mr. Arun Khurana, the Founder Director of SRC, is a social scientist and activist of high acclaim. He is also a media mogul. In addition to SRC, he is at the helm of two commercially successful companies as their Director. These companies are Degree 360 Solutions Private Limited and Degree 360 Software Private Limited."
      },
      {
        id: 2,
        name: 'S. P. Singh',
        position: 'Honorary Advisor',
        image: '/static/advisory/77.jpg',
        category: 'SOCIAL',
        biography: "Mr. S. P. Singh completed his Post-graduation Degree in commerce from KUK University in 1981. He has served as a Lecturer in Commerce for 11 Years and taught at Graduation and Post-graduation levels. Further, he had joined the Khadi and Village Industries Commission (KVIC), Govt. of India as the Director in 1992 and has served the Khadi and Village Industries Commission in different capacities till his retirement in February 2018."
      },
      {
        id: 3,
        name: 'R Ranjan Rashmi',
        position: 'Honorary Advisor',
        image: '/static/advisory/3-new.jpg',
        category: 'SOCIAL',
        biography: "Shri Rajani Ranjan Rashmi is a retired officer of the Indian Administrative Service and is known for his expertise in the field of environment and trade. During 35 years of his public service, he has served the Central Government and the State Government in various capacities, particularly in the fields of financial administration, environmental management and international trade."
      },
      {
        id: 4,
        name: 'Sutanu Sinha',
        position: 'Honorary Advisor',
        image: '/static/advisory/9.png',
        category: 'SOCIAL',
        biography: "CS Sutanu Sinha is the former Chief Executive of the Institute of Company Secretaries of India. Mr. Sinha headed the Academics & Professional Development Directorate of ICSI. He is a Fellow Member of the Institute of Company Secretaries of India and also a Member of the Institute of Chartered Secretaries and Administrators, London (UK). He is also Global Corporate Governance Forum (GCGF), IFC trained Trainer for Directors Development Programmes and Corporate Secretaries."
      },
      {
        id: 5,
        name: 'Ghanshyam Goel',
        position: 'Honorary Advisor',
        image: '/static/advisory/Dr._Rawail_Singh.jpg',
        category: 'SOCIAL',
        biography: "Mr. Ghanshyam Goel is a dedicated Indian Administrative Officer with experience in achieving memorable campaigns and cross-team collaboration. He is proactive and excited to partner with like-minded individuals."
      },
      {
        id: 6,
        name: 'Vivek Narayan Sharma',
        position: 'Honorary Advisor',
        image: '/static/advisory/SP_Sing_copy.jpg',
        category: 'SOCIAL',
        biography: "Mr. Vivek Narayan Sharma -a Socio-Politico-Constitution expert and renowned Advocate practicing at Supreme Court of India. He is the ex-Joint Secretary of Supreme Court Advocates on Record Association. He is the President of 'Society for Criminal Justice' and National Advisor to 'Ladli Foundation', Consultant & Convener for eminent social, political outfits and law journals in India. He is Advisor (Legal) to Indo-Canada Chambre De Commerce (ICCC). One of the most popular, most discussed and most-read Columnist for Times of India (TOI) and Economic Times (ET), he has authored the famous book 'Electionomics' published by leading publisher Thomson Reuters."
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
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-textColor text-center mb-8">Advisory</h1>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  activeCategory === category
                    ? 'text-textColor border-b-4 border-textColor'
                    : 'text-gray-400 hover:text-textColor border-b-4 border-transparent hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Members Grid */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-6">
          {currentMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/static/placeholder.png';
                      }}
                    />
                    
                    {/* Hover overlay with SEE MORE INFO button */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <button className="bg-black bg-opacity-80 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        SEE MORE INFO
                      </button>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-base font-semibold text-textColor mb-1">
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

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/3 p-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-auto rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = '/static/placeholder.png';
                  }}
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#136A89] mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {selectedMember.position}
                  </p>
                  <div className="text-gray-700 text-base leading-relaxed">
                    {selectedMember.biography}
                  </div>
                </div>
                
                {/* Close Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Advisory;
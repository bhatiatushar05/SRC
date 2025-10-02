import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('events');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'events', name: 'Events', count: 19 },
    { id: 'content', name: 'Content', count: 22 },
    { id: 'team', name: 'Team', count: 56 },
    { id: 'supporters', name: 'Supporters', count: 35 },
    { id: 'letters', name: 'Letters', count: 39 },
    { id: 'ventures', name: 'Ventures', count: 9 }
  ];

  const galleryImages = {
    events: [
      { src: '/static/event2021/Aashish Beergi (Panelist).jpg', title: 'Aashish Beergi (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Dr. Anil Kumar (Moderator).jpg', title: 'Dr. Anil Kumar (Moderator)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Dr. Rawail Singh.jpg', title: 'Dr. Rawail Singh', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Dr. S.K Dutta (Guest of Honour).jpg', title: 'Dr. S.K Dutta (Guest of Honour)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Justice Swatanter Kumar (Keynote Speaker).jpg', title: 'Justice Swatanter Kumar (Keynote Speaker)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mama Natung (Guest of Honour).jpg', title: 'Mama Natung (Guest of Honour)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mr. Arun Khurana (Honorable Organizer).jpg', title: 'Mr. Arun Khurana (Honorable Organizer)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mr. Gaurav Chopra (Panelist).jpg', title: 'Mr. Gaurav Chopra (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mr. Kishore Upadhyaya (Panelist).jpg', title: 'Mr. Kishore Upadhyaya (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mr. Praveen Garg (Panelist).jpg', title: 'Mr. Praveen Garg (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Mr. Vivek Narayan Sharma (Moderator).jpg', title: 'Mr. Vivek Narayan Sharma (Moderator)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Padma Shri Hans Raj Hans (Guest of Honour).jpg', title: 'Padma Shri Hans Raj Hans (Guest of Honour)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Padma Shri Jadav Payeng (Panelist).jpg', title: 'Padma Shri Jadav Payeng (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Padma Shri Sant Baba Balbir Singh Seechewal (Panelist).jpg', title: 'Padma Shri Sant Baba Balbir Singh Seechewal (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Peepal Baba (Swami Prem Parivartan) (Panelist).jpg', title: 'Peepal Baba (Swami Prem Parivartan) (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Rajesh S IFS (Panelist).jpg', title: 'Rajesh S IFS (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Sardar R. P. Singh (Guest of Honour).jpg', title: 'Sardar R. P. Singh (Guest of Honour)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Shri Tanmoy Chakrabarty (Panelist).jpg', title: 'Shri Tanmoy Chakrabarty (Panelist)', category: 'SEE Summit 2021' },
      { src: '/static/event2021/Shri. Vinai Kumar Saxena (Guest of Honour).jpg', title: 'Shri. Vinai Kumar Saxena (Guest of Honour)', category: 'SEE Summit 2021' }
    ],
    content: [
      { src: '/static/content/190716075155102_BW.jpg', title: 'Event Moment', category: 'Conference' },
      { src: '/static/content/DSC_0166_BW.jpg', title: 'Conference Hall', category: 'Venue' },
      { src: '/static/content/DSC_0399_BW.jpg', title: 'Audience Engagement', category: 'Event' },
      { src: '/static/content/NSP_1232_BW.jpg', title: 'Panel Discussion', category: 'Conference' },
      { src: '/static/index/1.jpg', title: 'SRC Activities', category: 'General' },
      { src: '/static/index/2.jpg', title: 'Community Engagement', category: 'Social' },
      { src: '/static/index/3.jpg', title: 'Environmental Initiative', category: 'Environment' },
      { src: '/static/index/4.jpg', title: 'Sustainability Program', category: 'Sustainability' },
      { src: '/static/index/master-splash.jpg', title: 'SRC Vision', category: 'About' },
      { src: '/static/index/one-500.jpg', title: 'Leadership', category: 'Team' },
      { src: '/static/index/PHOTO-2021-08-19-11-23-55.jpg', title: 'Team Meeting', category: 'Internal' },
      { src: '/static/index/SRC_SEE_Summit_2021_3.jpg', title: 'SEE Summit 2021', category: 'Summit' }
    ],
    team: [
      { src: '/static/team/Arun_Khurana_copy.jpg', title: 'Arun Khurana - Founder', category: 'Leadership' },
      { src: '/static/team/SP_Sing_copy.jpg', title: 'S.P. Singh - Finance', category: 'Finance' },
      { src: '/static/team/1.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/2.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/3.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/4.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/5.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/7.jpg', title: 'Team Member', category: 'Core Team' },
      { src: '/static/team/8.jpg', title: 'Team Member', category: 'Core Team' }
    ],
    supporters: [
      { src: '/static/supporters/c1.jpg', title: 'Corporate Partner', category: 'Partnership' },
      { src: '/static/supporters/c3.jpg', title: 'Industry Supporter', category: 'Industry' },
      { src: '/static/supporters/c4.jpg', title: 'Business Alliance', category: 'Alliance' },
      { src: '/static/supporters/c5.jpg', title: 'Strategic Partner', category: 'Strategy' },
      { src: '/static/supporters/c6.jpg', title: 'Community Partner', category: 'Community' },
      { src: '/static/supporters/c7.jpg', title: 'Technology Partner', category: 'Technology' },
      { src: '/static/supporters/c8.jpg', title: 'Innovation Partner', category: 'Innovation' },
      { src: '/static/supporters/c9.jpg', title: 'Development Partner', category: 'Development' },
      { src: '/static/supporters/c10.jpg', title: 'Growth Partner', category: 'Growth' }
    ],
    letters: [
      { src: '/static/letters/appreciation/0.jpg', title: 'Appreciation Letter', category: 'Recognition' },
      { src: '/static/letters/appreciation/1.jpg', title: 'Thank You Letter', category: 'Gratitude' },
      { src: '/static/letters/appreciation/2.jpg', title: 'Achievement Recognition', category: 'Achievement' },
      { src: '/static/letters/partner/0.jpg', title: 'Partnership Agreement', category: 'Partnership' },
      { src: '/static/letters/partner/1.jpg', title: 'Collaboration Letter', category: 'Collaboration' },
      { src: '/static/letters/partner/2.jpg', title: 'MOU Document', category: 'Agreement' }
    ],
    ventures: [
      { src: '/static/ventures/1.png', title: 'Venture Project 1', category: 'Innovation' },
      { src: '/static/ventures/2.png', title: 'Venture Project 2', category: 'Technology' },
      { src: '/static/ventures/3.png', title: 'Venture Project 3', category: 'Sustainability' },
      { src: '/static/ventures/4.png', title: 'Venture Project 4', category: 'Social Impact' },
      { src: '/static/ventures/5.png', title: 'Venture Project 5', category: 'Environment' },
      { src: '/static/ventures/6.png', title: 'Venture Project 6', category: 'Community' }
    ]
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const currentImages = galleryImages[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Explore our journey through images - events, team moments, partnerships, and achievements
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/static/placeholder.png';
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs opacity-90">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images available</h3>
            <p className="text-gray-500">Images for this category will be added soon.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
              onError={(e) => {
                e.target.src = '/static/placeholder.png';
              }}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

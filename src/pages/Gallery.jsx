import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Eye,
  Image as ImageIcon,
  Video as VideoIcon,
  Grid,
  GraduationCap,
  FlaskConical,
  Play,
  Youtube,
  Loader2,
} from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mediaDialog, setMediaDialog] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [imagesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllImages, setShowAllImages] = useState(false);
  const [imageLoading, setImageLoading] = useState({});

  const categories = [
    { id: "all", name: "All Projects", icon: Grid },
    { id: "education", name: "Education Initiatives", icon: GraduationCap },
    { id: "research", name: "Research & Development", icon: FlaskConical },
  ];

  const projects = [
    {
      id: 1,
      title: "Space Lab - Advanced Research Initiative",
      subtitle: "ISRO-recognized Space Tutor organizations",
      description:
        'ISRO-recognized Space Tutor organizations for the establishment of "Space Labs" in EMRS',
      src: "/static/space.jpg",
      thumbnail: "/static/space.jpg",
      type: "image",
      category: "education",
      tags: ["Space Research", "ISRO", "EMRS", "Innovation"],
    },
  ];

  const videos = [
    {
      id: 1,
      title: "The Sustainable Environment and Energy Summit 2020 Full Video",
      description:
        "The Sustainable Environment and Energy Summit 2020 Full Video organised by Social Responsibility Council on 19th December 2020 at Hotel Le Meridien, Janpath, New Delhi.",
      youtubeUrl: "https://www.youtube.com/watch?v=A63qyPumPwI",
      videoId: "A63qyPumPwI",
      thumbnail: "https://img.youtube.com/vi/A63qyPumPwI/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "The Second Sustainable Environment and Energy Summit 2020",
      description: "The Second Sustainable Environment and Energy Summit 2020",
      youtubeUrl: "https://www.youtube.com/watch?v=k7MrCYbJFKQ",
      videoId: "k7MrCYbJFKQ",
      thumbnail: "https://img.youtube.com/vi/k7MrCYbJFKQ/maxresdefault.jpg",
    },
    {
      id: 3,
      title:
        "The First Sustainable Environment and Energy Summit 2019 at Hotel Le Meridien, Janpath, New Delhi",
      description:
        "The First Sustainable Environment and Energy Summit 2019 at Hotel Le Meridien, Janpath, New Delhi",
      youtubeUrl: "https://www.youtube.com/watch?v=6gdtaekuH8I",
      videoId: "6gdtaekuH8I",
      thumbnail: "https://img.youtube.com/vi/6gdtaekuH8I/maxresdefault.jpg",
    },
  ];

  const getProjectsByCategory = (categoryId) => {
    if (categoryId === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === categoryId);
  };

  const paginatedProjects = useMemo(() => {
    const categoryProjects = getProjectsByCategory(categories[activeTab].id);
    if (showAllImages) {
      return categoryProjects;
    }
    return categoryProjects.slice(0, currentPage * imagesPerPage);
  }, [activeTab, showAllImages, currentPage, imagesPerPage]);

  const showMoreButtonText = useMemo(() => {
    const categoryProjects = getProjectsByCategory(categories[activeTab].id);
    if (showAllImages) {
      return "Show Less";
    }
    return `Show More (${
      categoryProjects.length - paginatedProjects.length
    } remaining)`;
  }, [activeTab, showAllImages, paginatedProjects.length]);

  const currentVideo = videos[currentVideoIndex];
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${currentVideo.videoId}`;

  const getGridClass = (cardCount) => {
    if (cardCount === 1) {
      return "max-w-[450px] mx-auto grid-cols-1";
    } else if (cardCount === 2) {
      return "max-w-[900px] mx-auto grid-cols-1 md:grid-cols-2";
    }
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  };

  const openMediaViewer = (item) => {
    setSelectedMedia(item);
    setMediaDialog(true);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex(
      currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1
    );
  };

  const selectVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  const loadMoreImages = () => {
    if (showAllImages) {
      setShowAllImages(false);
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev + 1);
      const categoryProjects = getProjectsByCategory(categories[activeTab].id);
      if (paginatedProjects.length >= categoryProjects.length) {
        setShowAllImages(true);
      }
    }
  };

  const resetPagination = () => {
    setCurrentPage(1);
    setShowAllImages(false);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    resetPagination();
  };

  const handleImageLoad = (itemId) => {
    setImageLoading((prev) => ({ ...prev, [itemId]: false }));
  };

  const handleImageError = (e) => {
    e.target.src = "/static/placeholder.png";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[250px] bg-gradient-to-br from-[#1D3A7C] to-[#2C498D]/40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/static/icon.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90">
              Explore Our Innovative Projects & Research
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Full Width Gallery Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1D3A7C] text-center mb-8 md:mb-12">
              Featured Projects
            </h2>

            {/* Project Filter Tabs */}
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-full">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleTabChange(index)}
                      className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 ${
                        activeTab === index
                          ? "bg-[#1D3A7C] text-white shadow-lg"
                          : "bg-transparent text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gallery Grid */}
            <div
              className={`grid gap-6 max-w-7xl mx-auto ${getGridClass(
                paginatedProjects.length
              )}`}
            >
              {paginatedProjects.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-item-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 h-full flex flex-col max-w-[400px] mx-auto"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Media Content */}
                    <div className="relative h-[280px] overflow-hidden rounded-t-3xl">
                      <div className="relative w-full h-full">
                        {imageLoading[item.id] !== false && (
                          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                            <Loader2 className="w-8 h-8 text-[#1D3A7C] animate-spin" />
                          </div>
                        )}
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onLoad={() => handleImageLoad(item.id)}
                          onError={handleImageError}
                        />

                        {/* Media Type Badge */}
                        <div className="absolute top-3 right-3 z-10">
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-white ${
                              item.type === "video"
                                ? "bg-red-500"
                                : "bg-green-500"
                            }`}
                          >
                            {item.type === "video" ? (
                              <VideoIcon className="w-3 h-3" />
                            ) : (
                              <ImageIcon className="w-3 h-3" />
                            )}
                            {item.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 bg-white rounded-b-3xl flex-shrink-0">
                      <h3 className="text-lg font-bold text-[#1D3A7C] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>

                    {/* Hover Description Overlay */}
                    {hoveredItem === item.id && (
                      <div className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col justify-end p-5 animate-fadeIn">
                        <h4 className="text-lg font-bold text-[#1D3A7C] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 border border-[#1D3A7C] text-[#1D3A7C] rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => openMediaViewer(item)}
                          className="flex items-center gap-2 px-4 py-2 bg-[#1D3A7C] text-white rounded-full text-sm font-medium hover:bg-[#152d5f] transition-colors w-fit"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {getProjectsByCategory(categories[activeTab].id).length >
              imagesPerPage && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMoreImages}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    showAllImages
                      ? "bg-red-500 text-white"
                      : "bg-[#1D3A7C] text-white"
                  }`}
                >
                  {showAllImages ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                  {showMoreButtonText}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* YouTube Video Slider Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1D3A7C] text-center mb-4">
                Featured Videos
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Watch our latest project presentations and insights
              </p>

              {/* Video Player Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Main Video Display */}
                <div className="relative">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={youtubeEmbedUrl}
                      title={currentVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>

                  {/* Video Navigation Arrows */}
                  <button
                    onClick={previousVideo}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1D3A7C]/80 hover:bg-[#1D3A7C] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextVideo}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1D3A7C]/80 hover:bg-[#1D3A7C] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D3A7C] mb-3">
                    {currentVideo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentVideo.description}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm px-3 py-1 border border-[#1D3A7C] text-[#1D3A7C] rounded-full">
                      <VideoIcon className="w-4 h-4" />
                      Video {currentVideoIndex + 1} of {videos.length}
                    </div>

                    <a
                      href={currentVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* Video Thumbnail Navigation */}
              <div className="flex gap-4 justify-center mt-6 flex-wrap">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => selectVideo(index)}
                    className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-w-[120px] max-w-[150px] ${
                      index === currentVideoIndex
                        ? "ring-4 ring-[#1D3A7C] shadow-lg -translate-y-1"
                        : ""
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-20 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="bg-white p-2">
                      <p className="text-xs text-center text-gray-700 line-clamp-1">
                        {video.title.substring(0, 30)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Media Viewer Dialog */}
      {mediaDialog && selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b flex items-center justify-between p-4 z-10">
              <h3 className="text-xl font-bold text-[#1D3A7C]">
                {selectedMedia.title}
              </h3>
              <button
                onClick={() => setMediaDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-0">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[600px] object-contain"
                  onError={handleImageError}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full max-h-[600px]"
                />
              )}
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold text-[#1D3A7C] mb-3">
                {selectedMedia.subtitle}
              </h4>
              <p className="text-gray-600 mb-4">{selectedMedia.description}</p>

              <div className="flex flex-wrap gap-2">
                {selectedMedia.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm border border-[#1D3A7C] text-[#1D3A7C] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .gallery-item-animate {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;

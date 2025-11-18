import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../components/HeroSection";
import LetterSlider from "../components/LetterSlider";
import SocialSection from "../components/SocialSection";
import CounterSection from "../components/CounterSection";
import SrcLoader from "../components/SrcLoader";
import {
  setHomeData,
  setInternshipValue,
  setVolunteerValue,
  setPledgeValue,
} from "../store/slices/mainSlice";
import { HomeService } from "./home/services/homeService.js";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.main.homeData);

  useEffect(() => {
    // Set document title
    document.title = "Social Responsibility Council - SrCouncil";

    // Load data via service (uses mock data for now)
    const loadHomeData = async () => {
      try {
        const result = await HomeService.getHomeData();
        if (result.success) {
          dispatch(setHomeData(result.data));
        } else {
          setError(result.message || "Failed to load data");
        }
      } catch (e) {
        setError("An error occurred while loading data");
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, [dispatch]);

  useEffect(() => {
    // Handle scroll events for counter animations
    const handleScroll = () => {
      if (window.scrollY > 500) {
        dispatch(setInternshipValue(100));
        dispatch(setVolunteerValue(400));
        dispatch(setPledgeValue(20));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  // Auto-slide functionality
  useEffect(() => {
    if (homeData?.master_list?.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % homeData.master_list.length);
      }, 10000); // Change slide every 10 seconds

      return () => clearInterval(interval);
    }
  }, [homeData?.master_list?.length]);

  // Navigation functions
  const nextSlide = () => {
    if (homeData?.master_list?.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % homeData.master_list.length);
    }
  };

  const prevSlide = () => {
    if (homeData?.master_list?.length > 0) {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + homeData.master_list.length) % homeData.master_list.length
      );
    }
  };

  if (loading) {
    return <SrcLoader />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Layout - EXACTLY like original website */}
      <div className="flex h-screen">
        {/* Left Sidebar - EXACTLY like original */}
        <div className="w-1/4 bg-gray-800 overflow-y-auto">
          <div className="p-2">
            {homeData?.master_list?.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-3 m-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-orange-500"
                    : "bg-gray-900 hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "/static/placeholder.png";
                    }}
                  />
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-light text-sm leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white text-xs opacity-80 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area - EXACTLY like original */}
        <div className="flex-1 relative h-screen overflow-hidden">
          {homeData?.master_list?.length > 0 && (
            <div className="h-full relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${homeData.master_list[currentSlide]?.image})`,
                }}
              />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-8">
                <div className="container mx-auto text-center">
                  <h2 className="text-white text-xl font-light mb-4">
                    {homeData.master_list[currentSlide]?.title}
                  </h2>
                  <p className="text-white text-base font-light max-w-4xl mx-auto">
                    {homeData.master_list[currentSlide]?.description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Counter Section */}
      <CounterSection />

      {/* Letters Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Few Words of Admiration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <LetterSlider
                title="Appreciation"
                path="appreciation"
                length={3}
                actual={3}
              />
            </div>
            <div>
              <LetterSlider
                title="Knowledge Partner"
                path="partner"
                length={6}
                actual={6}
              />
            </div>
            <div>
              <LetterSlider
                title="Letter for Recommendation"
                path="recommendation"
                length={8}
                actual={30}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SocialSection />
        </div>
      </div>
    </div>
  );
};

export default Home;

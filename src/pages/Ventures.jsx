import { useState, useEffect } from 'react';
import VentureCard from '../components/VentureCard';

const Ventures = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVentures = async () => {
      try {
        const response = await fetch('/static/data/ventures.json');
        const data = await response.json();
        setVentures(data);
      } catch (error) {
        console.error('Error fetching ventures:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVentures();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading ventures...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ventures so far</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aesthetic documentation of socially and economically pertinent actions multiplies the good effect 
              manifold. Research Books offer eternal life and value to an event or action. We have mastered the art 
              of creating such books to the perfection. From photography to content development and designing 
              and printing – we do it all. We also have expertise to transform the Research Book into an e-book.
            </p>
          </div>
        </div>
      </div>

      {/* Ventures Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ventures;

const VentureCard = ({ venture }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      <div className="p-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              src={venture.logo || '/static/placeholder.png'}
              alt={venture.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-center text-gray-900 mb-3">
          {venture.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
          {venture.description}
        </p>
        
        {/* Status Badge */}
        <div className="flex justify-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            venture.status === 'PROCEED' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {venture.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VentureCard;

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={member.image || '/static/placeholder.png'}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-primary-600 font-medium mb-2">
          {member.position}
        </p>
        <p className="text-gray-600 text-sm">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;


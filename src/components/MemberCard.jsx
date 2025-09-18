const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={member.image || '/static/placeholder.png'}
          alt={member.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-primary-600 font-medium mb-2">
          {member.organization}
        </p>
        <p className="text-gray-600 text-sm mb-3">
          {member.bio}
        </p>
        {member.contact && (
          <div className="text-xs text-gray-500">
            {member.contact}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;


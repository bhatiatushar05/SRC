import { useSelector } from 'react-redux';
import { selectTimelineList } from '../store/slices/mainSlice';

const EventTimeline = () => {
  const timelineList = useSelector(selectTimelineList);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-textColor mb-6">Events</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-600"></div>
        
        <div className="space-y-8">
          {timelineList.map((item, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-lg font-bold text-primary-600">
                  {item.year}
                </span>
              </div>
              
              {/* Timeline marker */}
              <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-1 relative z-10"></div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {item.description}
                </p>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm border border-primary-600 hover:border-primary-700 px-4 py-2 rounded transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;


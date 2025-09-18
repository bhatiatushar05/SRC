import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectInternshipValue, selectVolunteerValue, selectPledgeValue } from '../store/slices/mainSlice';
import { Users, Heart, BookOpen, Leaf } from 'lucide-react';

const CounterSection = () => {
  const internshipTarget = useSelector(selectInternshipValue);
  const volunteerTarget = useSelector(selectVolunteerValue);
  const pledgeTarget = useSelector(selectPledgeValue);
  const esfTarget = 100; // Static ESF value

  const [internshipCount, setInternshipCount] = useState(0);
  const [volunteerCount, setVolunteerCount] = useState(0);
  const [pledgeCount, setPledgeCount] = useState(0);
  const [esfCount, setEsfCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter) => {
      let current = 0;
      const increment = target / 50; // 50 steps for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30); // Update every 30ms
    };

    if (volunteerTarget > 0) animateCounter(volunteerTarget, setVolunteerCount);
    if (internshipTarget > 0) animateCounter(internshipTarget, setInternshipCount);
    if (pledgeTarget > 0) animateCounter(pledgeTarget, setPledgeCount);
    if (esfTarget > 0) animateCounter(esfTarget, setEsfCount);
  }, [internshipTarget, volunteerTarget, pledgeTarget, esfTarget]);

  const counters = [
    {
      icon: Users,
      count: volunteerCount,
      label: 'Volunteers',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-blue-600'
    },
    {
      icon: BookOpen,
      count: internshipCount,
      label: 'Internship',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      textColor: 'text-green-600'
    },
    {
      icon: Heart,
      count: pledgeCount,
      label: 'Pledge',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      textColor: 'text-red-600'
    },
    {
      icon: Leaf,
      count: esfCount,
      label: 'ESF',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Join The Conversation
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Check out the latest and spread the word.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const IconComponent = counter.icon;
            return (
              <div key={index} className="text-center">
                <div className={`${counter.color} rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {counter.count}
                </div>
                <div className="text-gray-600 text-lg font-medium">
                  {counter.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;


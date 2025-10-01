import { useEffect } from 'react';
import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: "ARUN KHURANA",
    role: "Founder",
    image: "/static/team/Arun_Khurana_copy.jpg",
    category: "leadership"
  },
  {
    name: "S. P. SINGH",
    role: "Finance",
    image: "/static/team/SP_Sing_copy.jpg",
    category: "finance"
  },
  {
    name: "SANJAI SRIVASTAVA",
    role: "Content",
    image: "/static/team/Sanjay_copy.jpg",
    category: "content"
  },
  {
    name: "AMANPREET SINGH",
    role: "Strategy",
    image: "/static/team/Aman_Deep_copy.jpg",
    category: "strategy"
  },
  {
    name: "SAURABH NANDA",
    role: "Hon' Consultant",
    image: "/static/team/ssssss.png",
    category: "consultant"
  },
  {
    name: "SOURAV GOLA",
    role: "Technology",
    image: "/static/team/Sourav_copy.jpg",
    category: "technology"
  },
  {
    name: "S. N. SINGH",
    role: "Legal",
    image: "/static/team/S_N_Singh_copy.jpg",
    category: "legal"
  },
  {
    name: "KAPIL KUMAR",
    role: "Operations",
    image: "/static/team/Kapil_copy.jpg",
    category: "operations"
  },
  {
    name: "PRIYANSHU KUMAR",
    role: "Operations",
    image: "/static/team/Priyanshu_copy.jpg",
    category: "operations"
  },
  {
    name: "DAKSH KHURANA",
    role: "Operations",
    image: "/static/team/Daksh_Khurana_copy.jpg",
    category: "operations"
  },
  {
    name: "MAHESH MAMGAIN",
    role: "Human Resource",
    image: "/static/team/Mahesh_copy.jpg",
    category: "hr"
  },
  {
    name: "VIPIN KHURANA",
    role: "Human Resource",
    image: "/static/team/Vipin_Khurana_copy.jpg",
    category: "hr"
  },
  {
    name: "JITENDRA GUPTA",
    role: "Logistics",
    image: "/static/team/Jeetandr_copy.jpg",
    category: "logistics"
  },
  {
    name: "MUKESH KUMAR",
    role: "Logistics",
    image: "/static/team/Mukesh_copy.jpg",
    category: "logistics"
  }
];

const Team = () => {
  useEffect(() => {
    document.title = 'Team - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated team members who work tirelessly to drive our mission forward.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Team;


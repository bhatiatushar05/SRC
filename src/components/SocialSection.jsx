import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const SocialSection = () => {
  const tweets = [
    {
      id: 1,
      text: "Data protection is indeed important in all businesses but especially so in primary care settings where a range of s...",
      date: "Tue Jun 15 11:10:15 +0000 2021",
      retweets: 1,
      likes: 0
    },
    {
      id: 2,
      text: "Yoga is not a work-out it is a work-in, and this is the point of spiritual practice to make us teachable to open up...",
      date: "Mon Jun 21 10:54:14 +0000 2021",
      retweets: 1,
      likes: 0
    },
    {
      id: 3,
      text: "\"Yoga is a light, which once lit, will never dim. The better your practice, the brighter the flame.\" — B.K.S. Iyeng...",
      date: "Mon Jun 21 10:53:32 +0000 2021",
      retweets: 0,
      likes: 0
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-textColor text-center mb-6">
        Connect With Us
      </h2>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href="https://twitter.com/Srcdelhi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialSection;


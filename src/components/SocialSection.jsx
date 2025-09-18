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
    <div className="bg-white rounded-lg shadow-md p-6">
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

      {/* Twitter Feed */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Tweets</h3>
        {tweets.map((tweet) => (
          <div key={tweet.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Social Responsibility Council</span>
                  <span className="text-gray-500 text-sm">@Srcdelhi</span>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed mb-3">
                  {tweet.text}
                </p>
                <div className="flex items-center space-x-4 text-gray-500 text-xs">
                  <span>{new Date(tweet.date).toLocaleDateString()}</span>
                  <span>{tweet.retweets} Retweets</span>
                  <span>{tweet.likes} Likes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <div className="text-center mt-6">
        <a
          href="https://twitter.com/Srcdelhi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span>Follow @Srcdelhi</span>
        </a>
      </div>
    </div>
  );
};

export default SocialSection;


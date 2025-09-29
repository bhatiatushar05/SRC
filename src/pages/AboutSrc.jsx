import { useEffect } from 'react';
import { Users, Flag, TrendingUp, Leaf, Target, Recycle, UserCheck } from 'lucide-react';

const AboutSrc = () => {
  useEffect(() => {
    document.title = 'About SRC - Social Responsibility Council';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-textColor mb-12">Mission</h1>
            <p className="text-xl text-textColor max-w-5xl mx-auto leading-relaxed font-medium">
              SRC is committed to the ongoing advancement of Indian society through initiatives that promote sustainable 
              development, social responsibility, and empowerment. Our mission is driven by the belief that positive change is 
              possible through knowledge, innovation, and a strong collective will.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            {/* Promoting Knowledge Card */}
            <div className="bg-white border-l-4 border-textColor p-12 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-textColor mb-8">
                Promoting Knowledge for Sustainable Impact
              </h3>
              <p className="text-lg text-textColor leading-relaxed">
                We strive to create and share knowledge and resources that inspire sustainable 
                environmental practices, foster social responsibility, and empower individuals and 
                communities.
              </p>
            </div>

            {/* Transforming Challenges Card */}
            <div className="bg-white border-l-4 border-textColor p-12 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-textColor mb-8">
                Transforming Challenges into Sustainable Solutions
              </h3>
              <p className="text-lg text-textColor leading-relaxed">
                We firmly believe that every challenge presents an opportunity for sustainable solutions. With 
                the right determination and a proactive "willpower" coupled with a "can-do" spirit, any 
                obstacle can be overcome in a way that is both responsible and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-textColor mb-16">Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Alignment with Social Concerns */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-textColor p-6 rounded-full">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textColor mb-6">
                Alignment with Social Concerns
              </h3>
              <p className="text-lg text-textColor leading-relaxed">
                To be an agency whose strategies, policies, and initiatives are consistently aligned with 
                the broader social needs and concerns, ensuring relevance and impact in the 
                communities we serve.
              </p>
            </div>

            {/* Contributing to Nation-Building */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-textColor p-6 rounded-full">
                  <Flag className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textColor mb-6">
                Contributing to Nation-Building
              </h3>
              <p className="text-lg text-textColor leading-relaxed">
                To actively contribute to the nation-building process by undertaking key initiatives in 
                education, healthcare, environmental sustainability, and other socially significant 
                areas.
              </p>
            </div>

            {/* Enhancing Social Development */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-textColor p-6 rounded-full">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-textColor mb-6">
                Enhancing Social Development
              </h3>
              <p className="text-lg text-textColor leading-relaxed">
                To be a leading agency in enhancing social development by delivering sustainable, long-
                term solutions that add significant value to societal progress and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Action Plan Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-textColor mb-8">Our Action Plan</h2>
            <h3 className="text-3xl font-bold text-textColor mb-12">
              We as Conscience Keepers of Sustainability and Responsibility
            </h3>
            <p className="text-xl text-textColor max-w-5xl mx-auto leading-relaxed">
              In both the Indian and global contexts, we serve as key advocates for sustainability and responsibility across 
              industrial, political, and social spheres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 mt-20">
            {/* Embedding Sustainability */}
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="bg-green-500 p-4 rounded-full mr-6 flex-shrink-0">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textColor mb-6">
                    Embedding Sustainability by Design
                  </h3>
                  <p className="text-lg text-textColor leading-relaxed">
                    We integrate sustainability and responsibility into the very framework of our operations, ensuring these values are 
                    central to every project and initiative.
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting CSR */}
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="bg-blue-500 p-4 rounded-full mr-6 flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textColor mb-6">
                    Supporting Corporate Social Responsibility (CSR)
                  </h3>
                  <p className="text-lg text-textColor leading-relaxed">
                    As a thought leader and strategic advisor, we assist the corporate sector in fulfilling its CSR obligations, aligning 
                    with the United Nations' Sustainable Development Goals (SDGs). The UN Global Compact has designated this as the 
                    "Decade to Deliver," urging accelerated action amid the global climate crisis and post-pandemic recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Driving Sustainable Business Practices */}
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="bg-orange-500 p-4 rounded-full mr-6 flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textColor mb-6">
                    Driving Sustainable Business Practices
                  </h3>
                  <p className="text-lg text-textColor leading-relaxed">
                    We believe in transforming business practices by embedding sustainability into the design and operations of 
                    organizations, creating long-term value while fostering environmental responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Minimizing Environmental Footprint */}
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="bg-purple-500 p-4 rounded-full mr-6 flex-shrink-0">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textColor mb-6">
                    Minimizing Our Environmental Footprint
                  </h3>
                  <p className="text-lg text-textColor leading-relaxed">
                    As a non-profit organization, we acknowledge that our primary environmental impacts stem from greenhouse gas 
                    emissions related to travel and electricity use at our offices. We are committed to reducing these impacts and 
                    advancing our own sustainability efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Industries Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-textColor mb-16">
              Supporting Industries in Transitioning to Low-Carbon Energy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Environmental Sustainability */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-green-500 p-6 rounded-full">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-textColor mb-6">
                Environmental Sustainability
              </h3>
              <p className="text-base text-textColor leading-relaxed">
                Help industries reduce ecological footprints and adopt sustainable practices for long-term environmental 
                stewardship.
              </p>
            </div>

            {/* Net-Zero Emissions Strategies */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-blue-500 p-6 rounded-full">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-textColor mb-6">
                Net-Zero Emissions Strategies
              </h3>
              <p className="text-base text-textColor leading-relaxed">
                Develop tailored strategies to help organizations set and achieve ambitious net-zero emissions goals, in line with 
                global standards.
              </p>
            </div>

            {/* Waste Reduction & Circular Economy */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-orange-500 p-6 rounded-full">
                  <Recycle className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-textColor mb-6">
                Waste Reduction & Circular Economy
              </h3>
              <p className="text-base text-textColor leading-relaxed">
                Promote recycling and responsible waste reprocessing to minimize landfill waste and support a circular economy.
              </p>
            </div>

            {/* Empowering Industry Leaders */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-purple-500 p-6 rounded-full">
                  <UserCheck className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-textColor mb-6">
                Empowering Industry Leaders
              </h3>
              <p className="text-base text-textColor leading-relaxed">
                Provide learning and development programs to enhance environmental efficiency and foster a culture of 
                sustainability within organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">About</a></li>
                <li><a href="/team" className="text-gray-300 hover:text-white transition-colors text-lg">Team</a></li>
                <li><a href="/membership/voluntary" className="text-gray-300 hover:text-white transition-colors text-lg">Volunteer</a></li>
              </ul>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Media</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">Press Release</a></li>
                <li><a href="/events" className="text-gray-300 hover:text-white transition-colors text-lg">Events</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Contact Us</h3>
              <a href="mailto:info@srcouncil.in" className="text-gray-300 hover:text-white transition-colors underline text-lg">
                info@srcouncil.in
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Disclaimer</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </div>
              <div className="text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Tweets by SrCouncil</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-300 flex items-center">
                <span className="mr-2">©</span>
                <span>Copyright © 2025 — All Right Reserved</span>
              </div>
              <div className="text-gray-300">
                Design & Developed by <a href="#" className="text-white hover:underline">Digivaarla India Pvt. Ltd.</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSrc;


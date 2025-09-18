import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const MasterFooterTwo = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About SRC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Social Responsibility Council is a voluntary non-profit organization 
              creating awareness about various facets of social responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/membership/voluntary" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:contact@srcouncil.in" className="text-gray-300 hover:text-white transition-colors text-sm">
                  contact@srcouncil.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">+91-XXX-XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary-600 p-2 rounded hover:bg-primary-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/Srcdelhi" target="_blank" rel="noopener noreferrer" className="bg-primary-600 p-2 rounded hover:bg-primary-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-primary-600 p-2 rounded hover:bg-primary-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-primary-600 p-2 rounded hover:bg-primary-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MasterFooterTwo;


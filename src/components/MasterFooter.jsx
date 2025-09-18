import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const MasterFooter = () => {
  const quickLinks = [
    { name: 'About SRC', href: '/about-us/' },
    { name: 'CSR', href: '/csr/projects/' },
    { name: 'ESF', href: '/static/pdf/organization-structure.pdf', external: true },
    { name: 'Learning & Development', href: '#' },
    { name: 'Tenders', href: '/tenders' },
    { name: 'Events', href: '#' },
    { name: 'Memberships', href: '/membership/voluntary/' },
    { name: 'Career', href: '#' }
  ];

  const mediaLinks = [
    { name: 'Photo Gallery', href: '#' },
    { name: 'Video Gallery', href: '#' },
    { name: 'Press Releases', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Reports', href: '/static/pdf/' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <img 
                src="/static/src.png" 
                alt="SRC Logo" 
                className="h-16 mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Social Responsibility Council is committed to creating a sustainable future through 
                responsible business practices and community engagement.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Media</h3>
              <ul className="space-y-2">
                {mediaLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    New Delhi, India
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    +91-11-XXXXXXXX
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    info@srcouncil.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <Link to="/disclaimer" className="hover:text-white mr-4">Disclaimer</Link>
              <Link to="/terms" className="hover:text-white mr-4">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p className="mb-1">
                Copyright © {new Date().getFullYear()} — All Right Reserved
              </p>
              <p>
                Design & Developed by Digivaarta India Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MasterFooter;


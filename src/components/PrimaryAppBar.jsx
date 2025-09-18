import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X, ChevronDown } from 'lucide-react';
import { selectMenuList } from '../store/slices/mainSlice';

const PrimaryAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const menuList = useSelector(selectMenuList);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const renderSubmenu = (options) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="absolute left-0 mt-2 w-64 bg-primary-600 rounded-md shadow-lg z-50">
        {options.map((option, index) => (
          <div key={index} className="relative group">
            {option.subMenu ? (
              <>
                <div className="px-4 py-3 text-white hover:bg-orange-500 cursor-pointer flex items-center justify-between">
                  <span>{option.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                {option.subMenuOptions && (
                  <div className="hidden group-hover:block absolute left-full top-0 w-64 bg-primary-600 rounded-md shadow-lg">
                    {option.subMenuOptions.map((subOption, subIndex) => (
                      <div key={subIndex}>
                        {subOption.target === '_blank' ? (
                          <a
                            href={subOption.redirect}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 text-white hover:bg-orange-500 transition-colors"
                          >
                            {subOption.name}
                          </a>
                        ) : (
                          <Link
                            to={subOption.redirect}
                            className="block px-4 py-3 text-white hover:bg-orange-500 transition-colors"
                          >
                            {subOption.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {option.target === '_blank' ? (
                  <a
                    href={option.redirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-white hover:bg-orange-500 transition-colors"
                  >
                    {option.name}
                  </a>
                ) : (
                  <Link
                    to={option.redirect}
                    className="block px-4 py-3 text-white hover:bg-orange-500 transition-colors"
                  >
                    {option.name}
                  </Link>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Navigation - EXACTLY like original */}
      <nav className="bg-primary-600 shadow-lg fixed w-full z-40 h-20 hidden md:block">
        <div className="max-w-full mx-0 px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="cursor-pointer">
                <img
                  src="/static/src.png"
                  alt="SRC Logo"
                  className="h-20 w-70 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuList.map((item, index) => (
                <div key={index} className="relative group">
                  {item.choice ? (
                    <>
                      <button className="text-white font-semibold text-sm capitalize px-3 py-2 hover:bg-primary-700 transition-colors rounded">
                        {item.name}
                      </button>
                      {/* Dropdown Menu */}
                      <div className="hidden group-hover:block">
                        {renderSubmenu(item.options)}
                      </div>
                    </>
                  ) : (
                    <>
                      {item.target === '_blank' ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold text-sm capitalize px-3 py-2 hover:bg-primary-700 transition-colors rounded"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="text-white font-semibold text-sm capitalize px-3 py-2 hover:bg-primary-700 transition-colors rounded"
                        >
                          {item.name}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-primary-600 shadow-lg fixed w-full z-40 h-20 md:hidden">
        <div className="max-w-full mx-0 px-4">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/static/src.png"
                  alt="SRC Logo"
                  className="h-20 w-70 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="bg-primary-600 px-4 py-4 flex justify-between items-center">
                <img
                  src="/static/src.png"
                  alt="SRC Logo"
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                {menuList.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.choice ? (
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(index)}
                          className="w-full text-left text-textColor font-semibold py-3 flex items-center justify-between border-b border-gray-200"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform ${
                              openSubmenu === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openSubmenu === index && item.options && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.options.map((option, optionIndex) => (
                              <div key={optionIndex}>
                                {option.target === '_blank' ? (
                                  <a
                                    href={option.redirect}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-textColor py-2 hover:text-primary-600"
                                    onClick={toggleMenu}
                                  >
                                    {option.name}
                                  </a>
                                ) : (
                                  <Link
                                    to={option.redirect}
                                    className="block text-textColor py-2 hover:text-primary-600"
                                    onClick={toggleMenu}
                                  >
                                    {option.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {item.target === '_blank' ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-textColor font-semibold py-3 border-b border-gray-200"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.link}
                            className="block text-textColor font-semibold py-3 border-b border-gray-200"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default PrimaryAppBar;


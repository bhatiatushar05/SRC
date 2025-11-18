import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, ChevronDown } from "lucide-react";
import { selectMenuList } from "../store/slices/mainSlice";

const PrimaryAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);
  const menuList = useSelector(selectMenuList);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
    setOpenNestedSubmenu(null);
  };

  const handleNestedSubmenuToggle = (index, event) => {
    event.stopPropagation();
    setOpenNestedSubmenu(openNestedSubmenu === index ? null : index);
  };

  const renderSubmenu = (options, parentIndex) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="submenu-panel">
        {options.map((option, index) => (
          <div key={index} className="relative">
            {option.subMenu ? (
              <div className="relative">
                <div
                  onClick={(e) =>
                    handleNestedSubmenuToggle(`${parentIndex}-${index}`, e)
                  }
                  className="submenu-trigger"
                >
                  <span>{option.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-sm transform transition-transform text-white ${
                      openNestedSubmenu === `${parentIndex}-${index}`
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
                {option.subMenuOptions &&
                  openNestedSubmenu === `${parentIndex}-${index}` && (
                    <div className="submenu-nested">
                      {option.subMenuOptions.map((subOption, subIndex) => (
                        <div key={subIndex}>
                          {subOption.target === "_blank" ? (
                            <a
                              href={subOption.redirect}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="submenu-item"
                            >
                              {subOption.name}
                            </a>
                          ) : (
                            <Link
                              to={subOption.redirect}
                              className="submenu-item"
                            >
                              {subOption.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ) : (
              <>
                {option.target === "_blank" ? (
                  <a
                    href={option.redirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="submenu-trigger "
                  >
                    <span className="font-medium text-sm">{option.name}</span>
                  </a>
                ) : (
                  <Link to={option.redirect} className="submenu-trigger">
                    <span className="font-medium text-sm">{option.name}</span>
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
      {/* Desktop Navigation */}
      <nav className="bg-primary-600 shadow-sm fixed w-full z-40 h-16 hidden md:block">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="cursor-pointer">
                <img
                  src="/static/src.png"
                  alt="SRC Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuList.map((item, index) => (
                <div key={index} className="relative group">
                  {item.choice ? (
                    <>
                      <button className="menu-trigger appbar-link">
                        <span>{item.name}</span>
                        <ChevronDown className="chevron-icon w-3.5 h-3.5 opacity-80" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 dropdown-anim">
                        {renderSubmenu(item.options, index)}
                      </div>
                    </>
                  ) : (
                    <>
                      {item.target === "_blank" ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="appbar-link px-3 py-2 transition-colors duration-200 rounded-md"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="appbar-link px-3 py-2 transition-colors duration-200 rounded-md"
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
      <nav className="bg-primary-600 shadow-sm fixed w-full z-40 h-16 md:hidden">
        <div className="max-w-full mx-0 px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/static/src.png"
                  alt="SRC Logo"
                  className="h-12 w-auto object-contain"
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
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-200 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                {menuList.map((item, index) => (
                  <div key={index} className="mb-6">
                    {item.choice ? (
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(index)}
                          className="w-full text-left text-gray-800 font-semibold py-4 flex items-center justify-between border-b border-gray-200 text-lg"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openSubmenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openSubmenu === index && item.options && (
                          <div className="ml-6 mt-4 space-y-4">
                            {item.options.map((option, optionIndex) => (
                              <div key={optionIndex}>
                                {option.subMenu && option.subMenuOptions ? (
                                  <div>
                                    <div className="text-gray-700 py-3 font-semibold text-base">
                                      {option.name}
                                    </div>
                                    <div className="ml-6 space-y-3">
                                      {option.subMenuOptions.map(
                                        (subOption, subIndex) => (
                                          <div key={subIndex}>
                                            {subOption.target === "_blank" ? (
                                              <a
                                                href={subOption.redirect}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-gray-600 py-2 hover:text-primary-600 text-base transition-colors font-medium"
                                                onClick={toggleMenu}
                                              >
                                                {subOption.name}
                                              </a>
                                            ) : (
                                              <Link
                                                to={subOption.redirect}
                                                className="block text-gray-600 py-2 hover:text-primary-600 text-base transition-colors font-medium"
                                                onClick={toggleMenu}
                                              >
                                                {subOption.name}
                                              </Link>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    {option.target === "_blank" ? (
                                      <a
                                        href={option.redirect}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-gray-700 py-3 hover:text-primary-600 transition-colors text-base font-medium"
                                        onClick={toggleMenu}
                                      >
                                        {option.name}
                                      </a>
                                    ) : (
                                      <Link
                                        to={option.redirect}
                                        className="block text-gray-700 py-3 hover:text-primary-600 transition-colors text-base font-medium"
                                        onClick={toggleMenu}
                                      >
                                        {option.name}
                                      </Link>
                                    )}
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {item.target === "_blank" ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-800 font-semibold py-4 border-b border-gray-200 hover:text-primary-600 transition-colors text-lg"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.link}
                            className="block text-gray-800 font-semibold py-4 border-b border-gray-200 hover:text-primary-600 transition-colors text-lg"
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
      <div className="h-16"></div>
    </>
  );
};

export default PrimaryAppBar;

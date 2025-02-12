import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', dropdown: true, subItems: [
    { name: 'About the Conference', path: '/about' },
    { name: 'Scope of Conference', path: '/scope_conference' },
    { name: 'Organizing Committee', path: '/organizing_committee' },
    { name: 'Editorial Board', path: '/editorial_board' },
  ]},
  { name: "Author's Desk", dropdown: true, subItems: [
    { name: 'Conference Tracks', path: '/conference_tracks' },
    { name: 'Coming Soon', path: '/author/journal_publication' },
    { name: 'Key Dates', path: '/author/key_dates' },
    { name: 'Registration Details', path: '/author/registration_details' },
    { name: 'New Paper Submission', path: '/author/new_paper_submission' },
  ]},
  { name: 'Reach Us', dropdown: true, subItems: [
    { name: 'Contact Us', path: '/contact' },
  ]},
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    navigate('/author/new_paper_submission');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const isActive = (path, subItems = []) => {
    if (location.pathname === path || location.hash === path) {
      return true;
    }
    return subItems.some((subItem) => location.pathname === subItem.path || location.hash === subItem.path);
  };

  const renderDropdownItems = (subItems) => (
    <ul className="text-left space-y-2 font-roboto">
      {subItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className={`block py-1 hover:bg-blue-100 text-sm ${isActive(item.path) ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
            onClick={handleLinkClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderNavItems = (isMobile = false) => (
    navigationItems.map((item) => (
      <div key={item.name} className="relative">
        <button
          onClick={() => item.dropdown && toggleDropdown(item.name)}
          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isActive(item.path, item.subItems) || openDropdown === item.name
            ? 'text-blue-600 font-bold'
            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
        >
          <Link to={item.path} className="flex items-center">
            {item.name}
            {item.dropdown && (
              openDropdown === item.name ? <ChevronDown className="ml-2 h-4 w-4 text-gray-600" /> : 
              <ChevronUp className="ml-2 h-4 w-4 text-gray-600" />
            )}
          </Link>
        </button>

        {/* Dropdown */}
        {item.dropdown && openDropdown === item.name && (
          <div
            ref={dropdownRef}
            className={`absolute bg-white text-black mt-2 p-4 w-44 text-base rounded-lg shadow-lg z-20 ${isMobile ? 'mt-2' : 'mt-6'}`}
          >
            {renderDropdownItems(item.subItems)}
          </div>
        )}
      </div>
    ))
  );

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/logo/logo.png"
              alt="ICCSI Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {renderNavItems()}
            <button
              onClick={handleRegisterClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors hover:cursor-pointer"
            >
              Register Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {renderNavItems(true)}
              <button
                onClick={handleRegisterClick}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors hover:cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

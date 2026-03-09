import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Global } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Learn', path: '/learn' },
    { name: 'Individuals', path: '/' },
    { name: 'Businesses', path: '/' },
    { name: 'Developers', path: '/' },
    { name: 'Company', path: '/' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0052FF] mr-2">
              <path fillRule="evenodd" clipRule="evenodd" d="M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM512 805C673.82 805 805 673.82 805 512C805 350.18 673.82 219 512 219C350.18 219 219 350.18 219 512C219 673.82 350.18 805 512 805Z" fill="currentColor"/>
              <path d="M512 805C673.82 805 805 673.82 805 512C805 350.18 673.82 219 512 219C350.18 219 219 350.18 219 512C219 673.82 350.18 805 512 805Z" fill="white"/>
            </svg>
            <span className="text-[#0052FF] font-bold text-[26px] tracking-[-0.04em] leading-none mb-1">coinbase</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7 ml-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-bold text-[14px] transition-colors ${location.pathname === link.path ? 'text-[#0052FF]' : 'text-[#050f19] hover:text-[#0052ff]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <button className="text-[#050f19] bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full transition-colors flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className="text-[#050f19] bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full transition-colors flex items-center justify-center">
              <Global size={16} />
            </button>
            <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
            <Link to="/signin" className="text-[#050f19] hover:text-[#0052ff] font-bold text-[14px] px-4 py-2 hover:bg-gray-50 rounded-full transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="flex items-center justify-center bg-[#0052FF] text-white px-5 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#0045d8] transition-colors cursor-pointer tracking-wide">
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white w-full border-b border-gray-100 shadow-lg absolute h-screen overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-xl font-bold border-b border-gray-50 hover:text-[#0052ff] ${location.pathname === link.path ? 'text-[#0052FF]' : 'text-gray-900'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col space-y-4 px-3 pb-32">
              <Link onClick={() => setIsOpen(false)} to="/signup" className="flex items-center justify-center w-full bg-[#0052FF] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#0045d8]">
                Sign up
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/signin" className="flex items-center justify-center w-full bg-gray-50 text-gray-900 border border-gray-200 px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-100">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

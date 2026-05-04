import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import { useAuth } from '../context/AuthContext';
import { MenuIcon, CloseIcon } from '../components/ui/icons/CdsIcons';

const DashboardHeader = () => {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  const handleToggle = () => {
    if (window.innerWidth >= 1024) toggleSidebar();
    else toggleMobileSidebar();
  };

  const handleLogout = async () => {
    setDropOpen(false);
    await logout();
    navigate('/signin');
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const initials = user?.name
    ? user.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
    : (user?.email?.[0] ?? 'U').toUpperCase();

  const displayName = user?.name || user?.email || 'Account';

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-4 lg:px-6 bg-[#111827] border-b border-gray-800">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="Toggle sidebar"
        >
          {isMobileOpen
            ? <CloseIcon size={20} color="currentColor" />
            : <MenuIcon size={20} color="currentColor" />
          }
        </button>
        <Link to="/" className="lg:hidden text-white font-bold tracking-tight text-base">Coinbase</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <div className="relative" ref={dropRef}>
          <button
            onClick={() => setDropOpen((v) => !v)}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-xs font-bold shrink-0 select-none">
              {initials}
            </div>
            <span className="hidden sm:block text-sm font-medium text-white max-w-[130px] truncate">{displayName}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-500" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {dropOpen && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-gray-800 border border-gray-700 shadow-xl py-1 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-700">
                <p className="text-sm font-semibold text-white truncate">{user?.name || '—'}</p>
                <p className="text-xs text-gray-400 truncate mt-0.5">{user?.email}</p>
              </div>
              <Link to="/dashboard/profile" onClick={() => setDropOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                Profile
              </Link>
              <Link to="/" onClick={() => setDropOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                Home
              </Link>
              <div className="border-t border-gray-700 mt-1 pt-1">
                <button onClick={handleLogout}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-gray-700 transition-colors">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

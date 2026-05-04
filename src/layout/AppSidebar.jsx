import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/ui/Logo';
import {
  DashboardIcon, BriefcaseIcon, ChartBarIcon, RocketIcon, NewsFeedIcon,
  AddCryptoIcon, SendIcon, ReceiveIcon, SwapIcon, ProfileIcon, LogoutIcon,
} from '../components/ui/icons/CdsIcons';

const NAV = [
  {
    section: 'MAIN',
    items: [
      { name: 'Dashboard',  path: '/dashboard',           icon: DashboardIcon },
      { name: 'Portfolio',  path: '/dashboard/portfolio', icon: BriefcaseIcon },
    ],
  },
  {
    section: 'CRYPTO',
    items: [
      { name: 'Markets',      path: '/dashboard/markets',  icon: ChartBarIcon },
      { name: 'Top Gainers',  path: '/dashboard/gainers',  icon: RocketIcon },
      { name: 'New Listings', path: '/dashboard/new',      icon: NewsFeedIcon },
    ],
  },
  {
    section: 'ACTIONS',
    items: [
      { name: 'Add Crypto',  path: '/dashboard/send',        icon: AddCryptoIcon },
      { name: 'Send Crypto',  path: '/dashboard/send-crypto', icon: SendIcon },
      { name: 'Receive',      path: '/dashboard/receive',     icon: ReceiveIcon },
      { name: 'Swap',         path: '/dashboard/swap',        icon: SwapIcon },
    ],
  },
  {
    section: 'ACCOUNT',
    items: [
      { name: 'Profile', path: '/dashboard/profile', icon: ProfileIcon },
    ],
  },
];

const NavItem = ({ item, show, active }) => {
  const Icon = item.icon;
  return (
    <Link
      to={item.path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group
        ${active ? 'bg-[#0052FF]/10 text-[#0052FF]' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
        ${!show ? 'justify-center' : ''}`}
    >
      <span className="shrink-0">
        <Icon size={20} color={active ? '#0052FF' : 'currentColor'} />
      </span>
      {show && <span>{item.name}</span>}
    </Link>
  );
};

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered, toggleMobileSidebar } = useSidebar();
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);
  const show = isExpanded || isHovered || isMobileOpen;

  const handleLogout = async () => {
    await logout();
    if (isMobileOpen) toggleMobileSidebar();
    navigate('/signin');
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 flex flex-col bg-[#111827] border-r border-gray-800/80 transition-all duration-300 ease-in-out
        ${isExpanded || isMobileOpen ? 'w-[260px]' : isHovered ? 'w-[260px]' : 'w-[72px]'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className={`h-16 flex items-center px-4 border-b border-gray-800/70 shrink-0 ${show ? 'justify-start' : 'justify-center'}`}>
        <Link to="/" onClick={() => isMobileOpen && toggleMobileSidebar()}>
          {show
            ? <Logo height={22} className="brightness-0 invert" />
            : <div className="w-8 h-8 rounded-full bg-[#0052FF] flex items-center justify-center text-white font-bold text-xs">C</div>
          }
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-4 px-2 flex flex-col gap-1">
        {NAV.map(({ section, items }) => (
          <div key={section} className="mb-1">
            {show
              ? <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 px-3 py-2">{section}</p>
              : <div className="h-px bg-gray-800 mx-2 my-2" />
            }
            <ul className="flex flex-col gap-0.5">
              {items.map((item) => (
                <li key={item.name} onClick={() => isMobileOpen && toggleMobileSidebar()}>
                  <NavItem item={item} show={show} active={isActive(item.path)} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="px-2 pb-4 border-t border-gray-800/70 pt-3 shrink-0">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-150 group
            ${!show ? 'justify-center' : ''}`}
        >
          <span className="shrink-0 group-hover:text-red-400">
            <LogoutIcon size={20} color="currentColor" />
          </span>
          {show && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;

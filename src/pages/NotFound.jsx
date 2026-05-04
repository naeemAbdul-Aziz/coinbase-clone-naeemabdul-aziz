import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const NotFound = () => (
  <div className="min-h-screen bg-[#0A0B0D] flex flex-col">
    <div className="px-6 pt-5">
      <Link to="/"><Logo height={28} className="brightness-0 invert" /></Link>
    </div>
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#0052FF] font-semibold text-sm mb-3">404</p>
        <h1 className="text-3xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-[#8A919E] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#0052FF] text-white font-semibold text-[0.9375rem] hover:bg-[#0043D4] transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;

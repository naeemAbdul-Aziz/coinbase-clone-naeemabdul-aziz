import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/header';
import Footer from './components/footer';
import HeroSection from './components/sections/HeroSection';
import ExploreCryptoSection from './components/sections/ExploreCryptoSection';
import AdvancedTraderSection from './components/sections/AdvancedTraderSection';
import BaseAppSection from './components/sections/BaseAppSection';
import LearnSection from './components/sections/LearnSection';
import TakeControlSection from './components/sections/TakeControlSection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AccountTypeSelect from './pages/AccountTypeSelect';
import ForgotPassword from './pages/ForgotPassword';
import VerifyCode from './pages/VerifyCode';
import ExplorePage from './pages/ExplorePage';
import MarketStatsPage from './pages/MarketStatsPage';
import LearnPage from './pages/LearnPage';
import CryptoBasicsPage from './pages/CryptoBasicsPage';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Markets from './pages/Markets';
import Gainers from './pages/Gainers';
import NewListings from './pages/NewListings';
import Send from './pages/Send';
import SendCrypto from './pages/SendCrypto';
import Receive from './pages/Receive';
import Swap from './pages/Swap';
import DashboardProfile from './pages/DashboardProfile';
import DashboardLayout from './layout/DashboardLayout';
import Loader from './components/ui/Loader';
import NotFound from './pages/NotFound';
import StudentBanner from './components/StudentBanner';

const GuestRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  return user ? <Navigate to="/dashboard" replace /> : children;
};

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <ExploreCryptoSection />
      <AdvancedTraderSection />
      <BaseAppSection />
      <LearnSection />
      <TakeControlSection />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <AuthProvider>
      <StudentBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/market-stats" element={<MarketStatsPage />} />
        <Route path="/signin" element={<GuestRoute><SignIn /></GuestRoute>} />
        <Route path="/account-type" element={<GuestRoute><AccountTypeSelect /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />
        <Route path="/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
        <Route path="/verify" element={<GuestRoute><VerifyCode /></GuestRoute>} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/crypto-basics" element={<CryptoBasicsPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><DashboardLayout /></PrivateRoute>}
        >
          <Route index element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="markets"   element={<Markets />} />
          <Route path="gainers"   element={<Gainers />} />
          <Route path="new"       element={<NewListings />} />
          <Route path="send"      element={<Send />} />
          <Route path="send-crypto" element={<SendCrypto />} />
          <Route path="receive"   element={<Receive />} />
          <Route path="swap"      element={<Swap />} />
          <Route path="profile"   element={<DashboardProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

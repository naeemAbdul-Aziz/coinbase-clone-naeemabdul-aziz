import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { useAuth } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ExploreCryptoSection from './components/sections/ExploreCryptoSection.jsx';
import AdvancedTraderSection from './components/sections/AdvancedTraderSection.jsx';
import BaseAppSection from './components/sections/BaseAppSection.jsx';
import LearnSection from './components/sections/LearnSection.jsx';
import TakeControlSection from './components/sections/TakeControlSection.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import AccountTypeSelect from './pages/AccountTypeSelect.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import VerifyCode from './pages/VerifyCode.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import MarketStatsPage from './pages/MarketStatsPage.jsx';
import LearnPage from './pages/LearnPage.jsx';
import CryptoBasicsPage from './pages/CryptoBasicsPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Markets from './pages/Markets.jsx';
import Gainers from './pages/Gainers.jsx';
import NewListings from './pages/NewListings.jsx';
import Send from './pages/Send.jsx';
import SendCrypto from './pages/SendCrypto.jsx';
import Receive from './pages/Receive.jsx';
import Swap from './pages/Swap.jsx';
import DashboardProfile from './pages/DashboardProfile.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import Loader from './components/ui/Loader.jsx';
import NotFound from './pages/NotFound.jsx';
import StudentBanner from './components/StudentBanner.jsx';

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

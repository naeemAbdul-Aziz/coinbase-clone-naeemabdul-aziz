import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Loader from './ui/Loader.jsx';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;

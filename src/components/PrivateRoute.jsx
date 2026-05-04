import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './ui/Loader';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;

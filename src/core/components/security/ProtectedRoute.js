import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children, redirectTo }) => {
  const navigate = useNavigate();

  
  useEffect(() => {
    console.log("Checking user:", user);
    if (!user) {
      console.log("User not authenticated, redirecting...");
      navigate(redirectTo);
    } else {
      console.log("User authenticated, allowing access...");
    }
  }, [user, navigate, redirectTo]);

  return user ? children : null;
};

export default ProtectedRoute;
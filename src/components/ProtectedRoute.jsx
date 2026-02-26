import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Looks for the userID in the browser's local storage
  const userID = localStorage.getItem("userID");
  // Checks if the userID exists
  if (!userID) {
    // Redirect to start if no ID is found
    return <Navigate to="/" replace />;
  }
  // Load the page if the userID does exist
  return children;
};

export default ProtectedRoute;
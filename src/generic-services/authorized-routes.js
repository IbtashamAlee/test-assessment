import { Navigate, Outlet } from 'react-router-dom';

export const AuthorizedRoute = ({ children }) => {
  if (!localStorage.getItem('x_auth_token')) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};

export const EnrouteToDashboard = ({ children }) => {
  if (localStorage.getItem('x_auth_token')) {
    return <Navigate to="/success" replace />;
  }
  return children ? children : <Outlet />;
};


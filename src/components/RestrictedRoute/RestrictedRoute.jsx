import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // colon: giving a new name
  // =: setting a default value

  // const { isLoggedIn } = useAuth();
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {};

export default RestrictedRoute;

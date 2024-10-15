import LoginPage from 'pages/LoginPage/LoginPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={RegisterPage} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
        </Route>
        <Route
          path="/transactions"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={MainTransactionsPage}
            />
          }
        />
      </Routes>
    </>
  );
};

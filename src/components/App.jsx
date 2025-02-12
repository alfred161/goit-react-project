import LoginPage from 'pages/LoginPage/LoginPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage/TransactionsHistoryPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route path="/transactions">
            <Route
              path=":transactionsType"
              element={
                <RestrictedRoute
                  redirectTo="/"
                  component={<MainTransactionsPage />}
                />
              }
            />
            <Route path="history">
              <Route
                path=":transactionsType"
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<TransactionsHistoryPage />}
                  />
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

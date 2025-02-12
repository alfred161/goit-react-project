import AllUsersTab from 'components/AllUsersTab/AllUsersTab';
import AuthNav from 'components/AuthNav/AuthNav';
import { useLocation } from 'react-router-dom';
import css from './WelcomePage.module.css';

const WelcomePage = props => {
  const location = useLocation();
  const login = [
    '/transactions/expense',
    '/transactions/income',
    '/transactions/history/expense',
    '/transactions/history/income',
  ].includes(location.pathname);

  return (
    <>
      {!login && (
        <li className={css.main}>
          <ul className={css.list}>
            <li className={css.header}>
              <p className={css.expenseLog}>EXPENSE LOG</p>
              <h2 className={css.manageFinance}>
                Manage Your <span>Finances</span> Masterfully!
              </h2>
              <p className={css.description}>
                ExpenseTracker effortlessly empowers you to take control of your
                finances! With intuitive features, it simplifies the process of
                tracking and managing expenses, allowing for a stress-free
                mastery over your financial world.
              </p>
              <AuthNav />
            </li>
            <li>
              <AllUsersTab />
            </li>
          </ul>
        </li>
      )}
    </>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;

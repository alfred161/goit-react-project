import Logo from 'components/Logo/Logo';
import TransactionsHistoryNav from 'components/TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from 'components/UserBarBtn/UserBarBtn';
import { useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = props => {
  const location = useLocation();
  const login = [
    '/transactions/expense',
    '/transactions/income',
    '/transactions/history/expense',
    '/transactions/history/income',
  ].includes(location.pathname);

  return (
    <header>
      <ul className={`${css.container} ${!login ? css.loggedOut : ''}`}>
        <Logo />
        {login && <TransactionsHistoryNav />}
        {login && <UserBarBtn />}
      </ul>
    </header>
  );
};

Header.propTypes = {};

export default Header;

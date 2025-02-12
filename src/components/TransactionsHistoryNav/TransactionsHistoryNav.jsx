import { NavLink } from 'react-router-dom';
import css from './TransactionsHistoryNav.module.css';

const TransactionsHistoryNav = props => {
  return (
    <li className={css.container}>
      <NavLink
        to={'/transactions/history/expense'}
        className={({ isActive }) =>
          isActive ? 'button-nav btn-primary' : 'button-nav btn-secondary'
        }
      >
        All Expense
      </NavLink>
      <NavLink
        to={'/transactions/history/income'}
        className={({ isActive }) =>
          isActive ? 'button-nav btn-primary' : 'button-nav btn-secondary'
        }
      >
        All Income
      </NavLink>
    </li>
  );
};

TransactionsHistoryNav.propTypes = {};

export default TransactionsHistoryNav;

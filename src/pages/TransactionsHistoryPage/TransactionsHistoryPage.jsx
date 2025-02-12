import TransactionsList from 'components/TransactionsList/TransactionsList';
import TransactionsTotalAmount from 'components/TransactionsTotalAmount/TransactionsTotalAmount';
import { useLocation } from 'react-router-dom';

import css from './TransactionsHistoryPage.module.css';

const TransactionsHistoryPage = props => {
  const location = useLocation();
  const isHistory = [
    '/transactions/history/expense',
    '/transactions/history/income',
  ].includes(location.pathname);

  return (
    <>
      <li className={isHistory ? '' : css.main}>
        <div className={isHistory ? css.containerDisplayRow : css.container}>
          <div>
            <h1 className={css.expenseLog}>All Expense</h1>
            <p className={css.description}>
              View and manage every transaction seamlessly! Your entire
              financial landscape, all in one place.
            </p>
          </div>
          <TransactionsTotalAmount />
        </div>
      </li>
      <TransactionsList />
    </>
  );
};

TransactionsHistoryPage.propTypes = {};

export default TransactionsHistoryPage;

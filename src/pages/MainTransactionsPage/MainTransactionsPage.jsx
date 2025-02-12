import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionsChart from 'components/TransactionsChart/TransactionsChart';
import TransactionsTotalAmount from 'components/TransactionsTotalAmount/TransactionsTotalAmount';

import css from './MainTransactionsPage.module.css';

const MainTransactionsPage = props => {
  return (
    <>
      <li className={css.main}>
        <div className={css.container}>
          <div>
            <h1 className={css.expenseLog}>Expense Log</h1>
            <p className={css.description}>
              Capture and organize every penny spent with ease! A clear view of
              your financial habits at your fingertips.
            </p>
          </div>
          <TransactionsTotalAmount />
          <TransactionsChart />
        </div>
      </li>
      <TransactionForm />
    </>
  );
};

MainTransactionsPage.propTypes = {};

export default MainTransactionsPage;

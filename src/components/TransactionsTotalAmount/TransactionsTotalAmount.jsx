import icon from '../../images/icons.svg';
import css from './TransactionsTotalAmount.module.css';

const TransactionsTotalAmount = props => {
  return (
    <ul className={css.container}>
      <li className={css.balanceBox}>
        <div className={css.balanceTrendIcon}>
          <svg className={css.icon} width="15" height="17">
            <use href={`${icon}#icon-arrow-up`} />
          </svg>
        </div>
        <div className={css.balanceAmount}>
          <h3 className={css.total}>Total Income</h3>
          <h2 className={`${css.incomeBalance} bold`}>$632.000</h2>
        </div>
      </li>
      <li className={css.balanceBox}>
        <div className={css.balanceTrendIcon}>
          <svg className={css.icon} width="15" height="17">
            <use href={`${icon}#icon-arrow-down`} />
          </svg>
        </div>
        <div className={css.balanceAmount}>
          <h3 className={css.total}>Total Expense</h3>
          <h2 className={`${css.expenseBalance} bold`}>$632.000</h2>
        </div>
      </li>
    </ul>
  );
};

TransactionsTotalAmount.propTypes = {};

export default TransactionsTotalAmount;

import { useNavigate, useParams } from 'react-router-dom';
import css from './TransactionForm.module.css';

const TransactionForm = props => {
  const { transactionsType } = useParams();

  console.log(transactionsType);

  const navigate = useNavigate();

  const handleChangeTransactionType = event => {
    navigate('/transactions/' + event.target.defaultValue);
  };

  return (
    <li className={css.main}>
      <form action="" className={css.form}>
        <div className={css.transactionType}>
          <label className={css.radioGroup}>
            Expense
            <input
              type="radio"
              name="type"
              defaultChecked
              onClick={handleChangeTransactionType}
              value="expense"
            />
            <span className={css.radio}></span>
          </label>
          <label className={css.radioGroup}>
            Income
            <input
              type="radio"
              name="type"
              onClick={handleChangeTransactionType}
              value="income"
            />
            <span className={css.radio}></span>
          </label>
        </div>
        <div className={css.dateTimeGroup}>
          <div className={css.dateGroup}>
            <label htmlFor="date">Date</label>
            <div>
              <input type="date" id="date" placeholder="mm/dd/yyyy" />
              <svg width="27" height="16" className="visually-hidden">
                <use href=""></use>
              </svg>
            </div>
          </div>
          <div className={css.timeGroup}>
            <label htmlFor="time">Time</label>
            <div>
              <input type="time" id="time" placeholder="00:00:00" />
              <svg width="27" height="16" className="visually-hidden">
                <use href=""></use>
              </svg>
            </div>
          </div>
        </div>
        <div className={css.inputField}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Different"
          />
        </div>
        <div className={css.inputField}>
          <label htmlFor="sum">Sum</label>
          <input type="text" name="sum" id="sum" placeholder="Enter the sum" />
        </div>{' '}
        <div className={css.inputField}>
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            placeholder="Enter the text"
            rows={4}
          ></textarea>
        </div>
        <button className="button btn-primary" type="button">
          Add
        </button>
      </form>
    </li>
  );
};

TransactionForm.propTypes = {};

export default TransactionForm;

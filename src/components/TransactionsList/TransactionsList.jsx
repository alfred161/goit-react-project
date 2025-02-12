import icon from '../../images/icons.svg';
import css from './TransactionsList.module.css';

const TransactionsList = props => {
  return (
    <>
      <table className={css.table}>
        <tbody>
          <tr>
            <td colSpan={6} className={css.searchBox}>
              <div className={css.searchInputGroup}>
                <input
                  type="date"
                  autoComplete="current-password"
                  placeholder="Search for anything..."
                />
                <svg className={css.toggleShowPass} width="20" height="20">
                  <use href={`${icon}#icon-calendar-green`} />
                </svg>
              </div>
              <div className={css.searchInputGroup}>
                <input
                  autoComplete="current-password"
                  placeholder="dd/mm/yyyy"
                />
                <svg className={css.toggleShowPass} width="20" height="20">
                  <use href={`${icon}#icon-calendar-green`} />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

TransactionsList.propTypes = {};

export default TransactionsList;

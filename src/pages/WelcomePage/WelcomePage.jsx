import AllUsersTab from 'components/AllUsersTab/AllUsersTab';
import AuthNav from 'components/AuthNav/AuthNav';
import css from '../WelcomePage/WelcomePage.module.css';
const WelcomePage = props => {
  return (
    <div className={css.container}>
      <div
        className={css.subContainer}
        style={{ display: 'inline-flex', flexDirection: 'column' }}
      >
        <div>
          <h1 class={css.expenseLog}>EXPENSE LOG</h1>
          <div className={css.manageFinance}>
            Manage Your <span>Finances</span> Masterfully!
          </div>
          <p class={css.description}>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
        </div>
        <div className={css.authNavContainer}>
          <AuthNav />
        </div>
      </div>
      <div className={css.allUsersTab}>
        <AllUsersTab />
      </div>
    </div>
  );
};

WelcomePage.propTypes = {};

export default WelcomePage;

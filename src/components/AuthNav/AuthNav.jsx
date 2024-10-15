import { Link } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

const AuthNav = props => {
  return (
    <div className={css.authButtons}>
      <Link to="/signup">
        <button className={css.signup} type="button">
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button className={css.signin} type="button">
          Sign In
        </button>
      </Link>
    </div>
  );
};

AuthNav.propTypes = {};

export default AuthNav;

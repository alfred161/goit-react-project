import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = props => {
  return (
    <div className={css.btnGroup}>
      <Link to="/register" className="button btn-primary" type="button">
        Sign Up
      </Link>
      <Link to="/login" className="button btn-secondary" type="button">
        Sign In
      </Link>
    </div>
  );
};

AuthNav.propTypes = {};

export default AuthNav;

import css from '../Logo/Logo.module.css';
import icon from '../../images/logo.svg';
const Logo = props => {
  return (
    <h1 className={css.logoText}>
      <img src={icon} className={css.icon} alt=""></img>
      EXPENSETRACKER
    </h1>
  );
};

Logo.propTypes = {};

export default Logo;

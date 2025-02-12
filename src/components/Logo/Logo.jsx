import { useNavigate } from 'react-router-dom';
import icon from '../../images/icons.svg';
import css from './Logo.module.css';

const Logo = props => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions/expense');
  };
  return (
    <li className={css.container} onClick={handleClick}>
      <svg className={css.icon} width="27" height="16">
        <use href={`${icon}#logo`} />
      </svg>
      <h1 className={`${css.logo} bold`}>EXPENSETRACKER</h1>
    </li>
  );
};

Logo.propTypes = {};

export default Logo;

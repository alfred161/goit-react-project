import { useNavigate } from 'react-router-dom';
import icon from '../../images/icons.svg';
import css from './UserPanel.module.css';

const UserPanel = ({ show }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <ul className={css.userDropdown + (show ? '' : ' visually-hidden')}>
        <li>
          <svg className={css.userDropdownItem} width="16" height="17">
            <use href={`${icon}#icon-user`} />
          </svg>
          <button type="button">Profile settings</button>
        </li>
        <li>
          <svg className={css.userDropdownItem} width="16" height="16">
            <use href={`${icon}#icon-logout`} />
          </svg>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </li>
      </ul>
    </>
  );
};

UserPanel.propTypes = {};

export default UserPanel;

import UserPanel from 'components/UserPanel/UserPanel';
import icon from '../../images/icons.svg';
import user from '../../images/user.png';
import { useState } from 'react';

import css from './UserBarBtn.module.css';

const UserBarBtn = props => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <li className={css.container}>
      <div className={css.userBtn} onClick={handleClick}>
        <img
          className={css.userImage}
          src={user}
          width="48"
          height="48"
          alt="user"
        />
        <h2 className={css.name}>Name</h2>
        <svg className={css.caret} width="12" height="8">
          <use href={`${icon}#icon-chevron-down`} />
        </svg>
      </div>
      <UserPanel show={show} />
    </li>
  );
};

UserBarBtn.propTypes = {};

export default UserBarBtn;

import icon from '../../images/user.png';
import css from './AllUsersTab.module.css';

const AllUsersTab = props => {
  return (
    <div className={css.container}>
      <ul className={css.avatarList}>
        {[1, 2, 3].map(image => (
          <li key={image}>
            <img
              src={icon}
              width="48"
              height="48"
              alt={image}
              style={{
                position: 'relative',
                zIndex: 20 - image,
                left: -12 * (image - 1) + 'px',
              }}
            />
          </li>
        ))}
      </ul>
      <div className={css.userContainer}>
        <h2 className={css.totalUsers}>1000 users +</h2>
        <p className={css.textUsers}>
          Trusted by users for reliable expense tracking!
        </p>
      </div>
    </div>
  );
};

AllUsersTab.propTypes = {};

export default AllUsersTab;

import BurgerMenuBtn from 'components/BurgerMenuBtn/BurgerMenuBtn';
import Logo from 'components/Logo/Logo';
import TransactionsHistoryNav from 'components/TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from 'components/UserBarBtn/UserBarBtn';
import { NavLink } from 'react-router-dom';
import css from '../Header/Header.module.css';

const Header = props => {
  const isLoggedIn = false;
  return (
    <>
      <header className={isLoggedIn ? css.headerAuthenticated : css.header}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          <Logo />
        </NavLink>
        <nav className={css.navbar}>
          {isLoggedIn && (
            <>
              <TransactionsHistoryNav
                className={css.className}
                activeClass={css.activeClass}
              />
              <UserBarBtn className={css.userBar} />
              <BurgerMenuBtn className={css.burgerMenu} />
            </>
          )}
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;

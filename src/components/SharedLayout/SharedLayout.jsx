import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = props => {
  const location = useLocation();
  const login = [
    '/transactions/expense',
    '/transactions/income',
    '/transactions/history/expense',
    '/transactions/history/income',
  ].includes(location.pathname);

  console.log(`${location.pathname} location`);

  return (
    <>
      <Header />
      <main className={login ? css.loggedIn : ''}>
        <section className={css.section}>
          <ul
            className={
              [
                '/transactions/history/expense',
                '/transactions/history/income',
              ].includes(location.pathname)
                ? css.listDisplayColumn
                : css.list
            }
          >
            {!login && <BgImageWrapper />}
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ul>
        </section>
      </main>
    </>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;

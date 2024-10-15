import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';

export const SharedLayout = () => {
  const isLoggedIn = false;
  return (
    <>
      <Header />
      <main className={css.main}>
        {!isLoggedIn && <BgImageWrapper />}

        <div className={css.outlet}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

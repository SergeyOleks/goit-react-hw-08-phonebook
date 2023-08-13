import css from './Layout.module.css'

import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = ()=>{
    return (
      <main className={css.container}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    );
}
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../../components/Loader/Loader';

const Layout = () => {
  return (
    <div>
    <Header/>
    <Suspense fallback={<Loader/>}>
      <Outlet/>
    </Suspense>
    <Footer/>
    </div>
  )
}

export default Layout;

import { GlobalStyles } from '../GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));
const Tweets = lazy(() => import('../../pages/Tweets/Tweets'));
const Layout = lazy(() => import('../Layout/Layout'));

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

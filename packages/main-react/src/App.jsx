import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@/components/Loading';

import Login from '@/pages/Login';
import Sign from '@/pages/Sign';
import Main from '@/pages/Main';

const routeMap = [
  {
    id: 'main',
    path: '/',
    element: <Main />,
    description: '메인페이지'
  },
  {
    id: 'login',
    path: '/login',
    element: <Login />,
    description: 'JWT 로그인'
  },
  {
    id: 'sign',
    path: '/sign',
    element: <Sign />,
    description: '가입'
  }  
];

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {routeMap.map(route => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Suspense>
  )
};

export default App;
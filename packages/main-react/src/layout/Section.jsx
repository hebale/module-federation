import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '@/components/Loading';

const ListReact = React.lazy(() => import('listApp/App'));

const routeMap = [
  {
    title: 'Main',
    path: '/',
    element: <Loading />,
    description: 'Main React'
  },
  {
    title: 'List',
    path: '/list',
    element: <ListReact />,
    description: 'List React'
  },
  // {
  //   title: 'Form',
  //   path: '/form',
  //   element: <FormVue />,
  //   description: 'Form Vue'
  // }
]


const Section = () => {
  return (
    <Suspense fallback={<>로딩중</>}>      
      <Routes>
        {routeMap.map(route => (
          <Route key={route.title} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  )
};

export default Section;
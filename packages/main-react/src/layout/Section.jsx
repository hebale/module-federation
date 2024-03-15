import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "~/components/Loading";
import { Stack, Button } from "@mui/material";

const ListReact = React.lazy(() => import("listApp/App"));

const routeMap = [
  {
    title: "Main",
    path: "/",
    element: <Loading />,
    description: "Main React",
  },
  {
    title: "List",
    path: "/list",
    element: <ListReact />,
    description: "List React",
  },
  // {
  //   title: 'Form',
  //   path: '/form',
  //   element: <FormVue />,
  //   description: 'Form Vue'
  // }
];

const Section = () => {
  const [data, setData] = useState({});

  const mswFetching = async () => {
    const response = await fetch("/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setData(data);
  };

  console.log(data);

  return (
    <>
      <Button variant="contained" sx={{ height: "60px" }} onClick={mswFetching}>
        MSW TEST
      </Button>

      <div>
        <p>{data.name ?? "아무개"}</p>
        <p>{data.gender ?? "성별"}</p>
      </div>
    </>
    // <Suspense fallback={<>로딩중</>}>
    //   <Routes>
    //     {routeMap.map(route => (
    //       <Route key={route.title} path={route.path} element={route.element} />
    //     ))}
    //   </Routes>
    // </Suspense>
  );
};

export default Section;

import React from 'react';
import reactDOM from 'react-dom';
//import BlendModeSlider from "./components/BlendModeSlider/BlendModeSlider";

import App from './App';

import Services from './Pages/Services';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    
    {
        path: "Services",
        element: <Services/>,
      },




  ]);

reactDOM.render(

<RouterProvider router = {router}/>
, document.getElementById('root'));
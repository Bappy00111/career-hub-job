import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './component/Home.jsx';
import Statistics from './component/Statistics.jsx';
import Applye from './component/Applye.jsx';
import Blog from './component/Blog.jsx';
import JobCatagore from './component/Catagore.jsx';
import Catagore from './component/Catagore.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Catagore></Catagore>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/apply',
        element: <Applye></Applye>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

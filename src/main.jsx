import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Error from './components/Error/Error.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/list',
        element: <ListBooks></ListBooks>,
      },
      {
        path: '/read',
        element: <ReadBooks></ReadBooks>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

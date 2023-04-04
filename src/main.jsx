import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Routes/Root';
import ErrorPage from './components/Error/ErrorPage';
import Contact from './components/Routes/Contact';

const router= createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

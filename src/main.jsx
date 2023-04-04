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

const router= createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

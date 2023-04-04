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
import About from './components/About/About';
import Meals from './components/Meals/Meals';

const router= createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: 'contact',
        element:<About></About>,
      },
      {
        path: 'meals',
        element:<Meals/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
 
)

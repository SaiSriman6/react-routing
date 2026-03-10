// import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Node from './components/Node'
import Vue from './components/Vue'


function App() {
  
  // routing configuration
  const routingObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"technologies",
          element:<Technologies/>,
          children:[
            {
              path:"",
              element:<Navigate to="java"/>
            },
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"node",
              element:<Node/>
            },
            {
              path:"Vue",
              element:<Vue/>
            }
          ]
        }
      ]
    }
  ])
  return (
     <RouterProvider router={routingObj}/>
  )
}

export default App

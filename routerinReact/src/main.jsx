import './index.css'
import { createBrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider, createRoutesFromElements } from 'react-router-dom'
import React from 'react';
import Home from './componenets/home/Home.jsx'
import About from './componenets/about/About.jsx'
import Contact from './componenets/contact/Contact.jsx'
import Github,{GithubInfo}  from './componenets/github/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
                path: "",
                element: <Home />
      },
      {
                path: "about",
                element: <About />
      },
      {
                path: "contact",
                element: <Contact />
      },
      {
        loader:GithubInfo,
        path: "github",
        element: <Github />
}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)


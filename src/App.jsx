import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Portfolo from './Components/Portfolo/Portfolo.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'

let routers = createBrowserRouter([
  {path:'' ,element:<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:'about' ,element:<About/>},
    {path:'portfolo' ,element:<Portfolo/>},
    {path:'contact' ,element:<Contact/>},
    {path:'*' ,element:<Notfound/>}
  ]}
])




function App() {
  

  return <RouterProvider router={routers}></RouterProvider>

}

export default App

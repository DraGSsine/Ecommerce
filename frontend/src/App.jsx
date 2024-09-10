import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import {
  Home, Product, Products
} from './pages'
import {Navbar , Footer} from './components'

function App() {
  const Layout = () => {
    return (
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children:[
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/products/:id',
            element: <Products />
          },
          {
            path: '/product/:id',
            element: <Product />
          }
        ]
      },

    ]
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

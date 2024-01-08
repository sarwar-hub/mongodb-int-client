import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users';
import Edit from './components/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: ()=>fetch('http://localhost:5000/users')
  },
  {
    path: 'edit/:id',
    element: <Edit></Edit>,
    loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

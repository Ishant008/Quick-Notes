import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import store from './store/store.js'
import ProtectedRoute from './utils/ProtectedRoute.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        element: <ProtectedRoute />, 
        children: [
          { path: "/", element: <Home /> }, 
          { path: "/home", element: <Home /> }, 
        ],
      },
    ],
  },
 ])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

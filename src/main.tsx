import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home"
import Characters from './pages/characters'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/characters",
    element: <Characters />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

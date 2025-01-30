import App from '../layouts/App'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import NotFound from '../pages/404/NotFound'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'a-propos',
          element: <About />,
        },
        {
          path: '404',
          element: <NotFound />,
        },
        {
          path: '*',
          element: <Navigate to="/404" />,
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}
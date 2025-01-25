import App from '../pages/home/Home'
import {RouterProvider, createBrowserRouter} from 'react-router'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    }
  ])

  return <RouterProvider router={router} />
}
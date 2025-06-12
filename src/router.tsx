import { createBrowserRouter } from 'react-router'
import { LayoutApp, LayoutAuth } from './layouts'
import { PageHome } from './pages'
import { PageLogin } from './pages/login'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
  {
    path: '/auth',
    element: <LayoutAuth />,
    children: [
      {
        index: true,
        path: 'login',
        element: <PageLogin />,
      },
    ],
  },
])

export default appRouter

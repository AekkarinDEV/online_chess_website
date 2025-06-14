import { createBrowserRouter } from 'react-router'
import { LayoutApp, LayoutAuth } from './layouts'
import { PageHome, PageSignin, PageSignUp } from './pages'

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
        path: 'sign_in',
        element: <PageSignin />,
      },
      {
        index: true,
        path: 'sign_up',
        element: <PageSignUp />,
      },
    ],
  },
])

export default appRouter

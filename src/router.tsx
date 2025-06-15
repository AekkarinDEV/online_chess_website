import { createBrowserRouter } from 'react-router'
import { LayoutApp, LayoutAuth } from './layouts'
import { GoogleCallback, PageHome, PageSignin, PageSignUp } from './pages'

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
  {
    path: '/integrations/google/oauth2/callback',
    element: <GoogleCallback />,
  },
])

export default appRouter

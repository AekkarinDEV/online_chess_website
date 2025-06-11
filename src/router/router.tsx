import { createBrowserRouter } from 'react-router'
import { LoginPage, SignInPage } from '../pages'
import { AppLayout, AuthLayout } from '../layout'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'sign_in',
        element: <SignInPage />,
      },
    ],
  },
])

export default appRouter

import { createBrowserRouter } from 'react-router'
import { LayoutApp } from './layouts'
import { PageHome } from './pages'

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
])

export default appRouter

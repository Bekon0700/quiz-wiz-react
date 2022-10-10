import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'

import Home from './pages/home/Home'
import Topic from './pages/topics/Topic'
import Statistic from './pages/statistics/Statistic'
import Blog from './pages/blogs/Blog'
import { topicLoader } from './loaderMethods'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'topics',
          loader: topicLoader,
          element: <Topic />
        },
        {
          path: 'statistics',
          element: <Statistic />
        },
        {
          path: 'blogs',
          element: <Blog />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

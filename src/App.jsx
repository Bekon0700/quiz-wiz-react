import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/layout/Main'

import Home from './pages/home/Home'
import Topic from './pages/topics/Topic'
import Statistic from './pages/statistics/Statistic'
import Blog from './pages/blogs/Blog'
import { topicLoader, topicQuesLoader } from './loaderMethods'
import Question from './pages/questions/Question'
import Error from './pages/error/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'topics',
          loader: topicLoader,
          element: <Topic />,
        },
        {
          path: 'topic/:name/:id',
          loader: ({params}) => topicQuesLoader(params),
          element: <Question />,
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
    },
    // { path: '*', element: <Error /> }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

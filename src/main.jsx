import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AudioProvider } from './components/AudioContext.jsx'
import Home from './pages/Home.jsx'
import QuizzPage from './pages/QuizzPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ResultPage from './pages/ResultPage.jsx'

const root = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'quizz',
    element: <QuizzPage />
  },
  {
    path: 'result',
    element: <ResultPage />
  }
])

ReactDOM.createRoot(root).render(
  <AudioProvider>
    <RouterProvider router={router} />
  </AudioProvider>
)

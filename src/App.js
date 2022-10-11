import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Quiz from './Components/Quizzes/Quizzes';
import Statistics from './Components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <div>404, Not found</div>
    },
    {
      path: '/quiz/:id',
      loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element: <Quiz></Quiz>
    }
  ])
  return (
    <div className='bg'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

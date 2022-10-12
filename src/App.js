import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import QuizPage from './component/QuizPage/QuizPage';
import Main from './layout/Main/Main';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';

function App() {
  // Adding React Route.
  const route = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/quiz/:id', element: <QuizPage></QuizPage>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }
        },

        {
          path:'/statistics', element: <Statistics></Statistics>
        },


        {
          path:'/blog', element: <Blog></Blog>
        }



      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={route} />
      <ToastContainer />
    </div>
  );
}

export default App;

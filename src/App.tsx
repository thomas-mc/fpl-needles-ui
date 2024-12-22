import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Needles from './Pages/Needles/Needles';
import PageLayout from './components/PageLayout/PageLayout';

const router = createBrowserRouter([

  {
    path: "/",
    element: <PageLayout />, // Layout wraps all pages
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/needles",
        element: <Needles />, // Component to render for the "/about" path
      },
    ],
},
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

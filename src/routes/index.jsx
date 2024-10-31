import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Specs from '../pages/Specs';
import Benefits from '../pages/Benefits';
import Reviews from '../pages/Reviews';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'features',
        element: <Features />
      },
      {
        path: 'specs',
        element: <Specs />
      },
      {
        path: 'benefits',
        element: <Benefits />
      },
      {
        path: 'reviews',
        element: <Reviews />
      }
    ]
  }
]); 
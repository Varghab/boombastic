import React, { Children } from 'react';
import './App.css';
import Layout from './components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './components/Product/Product';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[{
      path:'/',
      element: <Home />
    },
    {
      path:'/product/:id',
      element: <Product />
    }
  ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
      </div>
    </RouterProvider>
  );
}

export default App;

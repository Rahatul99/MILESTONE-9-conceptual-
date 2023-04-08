import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import productsAndCartData from './Loaders/GetCardAndProductsSata';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: productsAndCartData,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/shop',
            element: <Shop />,
            loader: ()=> fetch('products.json')
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/cart',
            element: <Cart />,
            loader: productsAndCartData
        }
    
    ]   
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)

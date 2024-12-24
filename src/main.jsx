import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route,RouterProvider,createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import Home from '../src/commoponent/Home.jsx'
import MovieListing from '../src/commoponent/MovieListing.jsx'
import PageNotFound from '../src/commoponent/PageNotFound.jsx'
import MovieDetail from '../src/commoponent/MovieDetail.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[{
      path:"/",
      element:<Home />
    },
    {
      path:"/movie/:imdbID",
      element:<MovieDetail />
    },
    {
      path:"*",
      element:<PageNotFound />
    },
     
     
      
    ]
  },
 
  
 
]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

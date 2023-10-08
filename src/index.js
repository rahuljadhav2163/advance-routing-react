import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home/Home';
import Post from './view/Post/Post';
import Readpost from './view/Readpost/Readpost';

const router = createBrowserRouter([
  {
    path :'/',
    element : <Home/>
  },
  {
    path : '/post',
    element : <Post/>
  },
  {
    path : '/post/read/:id',
    element : <Readpost/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  );


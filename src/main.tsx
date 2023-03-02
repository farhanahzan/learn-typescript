import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Examples } from './components/examples/Examples';
import { Todo } from './components/todo/Todo';
import { Context } from './components/context/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Sorry, an unexpected error has occurred.</div>,
    children: [
      {
        path: 'example',
        element: <Examples />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: 'context',
        element: <Context />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

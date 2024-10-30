import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { router } from './routes';

import '@geek/tokens/dist/geek/css/_variables.css';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);

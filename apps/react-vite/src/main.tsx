import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@geek/tokens/dist/geek/css/_variables.css';

import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app/routers';
import './global.scss';
// import './global.css';

const root = document.getElementById('root');

if (!root) throw new Error('No root element found');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

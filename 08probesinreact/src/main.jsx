import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { App, StudentApp } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StudentApp />
  </StrictMode>
);

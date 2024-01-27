import React from 'react';               // Core foundation Library, which take all references
import ReactDOM from 'react-dom/client';     // Implementation of react on web application

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


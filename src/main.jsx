import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App.jsx'; // Ensure you're importing the correct component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);

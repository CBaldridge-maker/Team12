import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState('...');

  useEffect(() => {
    // 1. Fetch the configuration file you created
    fetch('/src/config.json')
      .then(response => response.json())
      .then(config => {
        // 2. Use the apiBaseUrl from the config to fetch the actual count
        // Assumes your API has an endpoint like /GetVisitorCount
        return fetch(`${config.apiBaseUrl}/GetVisitorCount`);
      })
      .then(response => response.json())
      .then(data => {
        // 3. Update the state with the number from your backend
        setCount(data.count); 
      })
      .catch(err => {
        console.error("Failed to load visitor count:", err);
        setCount("Error");
      });
  }, []);

  return (
    // This renders the span with the ID you previously set up
    <span id="visitor-count">{count}</span>
  );
}

export default VisitorCounter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)

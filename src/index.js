import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './med/Router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);

reportWebVitals();

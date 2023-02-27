import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'med/Router';
import reportWebVitals from 'reportWebVitals';
import "css/bootstrap.min.css";
import "css/all.min.css";
import "css/sideber.css"
import "css/common.css"
import "css/member.css";
import "css/layout.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);

reportWebVitals();

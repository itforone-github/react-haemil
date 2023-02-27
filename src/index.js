import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'med/Router';

// js
import "js/jquery-1.9.1.min.js";
import "js/bootstrap.min.js";
import "js/ui.js";

// css
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
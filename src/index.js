import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { SomethingWentWrong } from './components';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <SomethingWentWrong>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SomethingWentWrong>
  </React.StrictMode>
)

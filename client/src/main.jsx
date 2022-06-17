import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './shared/theme';
import CartContextProvider from './shared/Context/CartContext';
import App from './App';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CartContextProvider>
  </React.StrictMode>
);

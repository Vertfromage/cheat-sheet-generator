import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormulasContextProvider } from './context/FormulasContext';
import { PageContextProvider } from './context/PageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContextProvider>
    <FormulasContextProvider >
    <App />
    </FormulasContextProvider>
    </PageContextProvider>
  </React.StrictMode>
)

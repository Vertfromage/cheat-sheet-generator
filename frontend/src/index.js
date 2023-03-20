import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormulasContextProvider } from './context/FormulasContext';
import { PageContextProvider } from './context/PageContext';
import { UserContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <PageContextProvider>
    <FormulasContextProvider >
    <App />
    </FormulasContextProvider>
    </PageContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CasesPage } from './pages/CasesPage';
import './index.css';

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
const isCasesPage = normalizedPath.endsWith('/cases') || normalizedPath.endsWith('/cases.html');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>{isCasesPage ? <CasesPage /> : <App />}</React.StrictMode>
);

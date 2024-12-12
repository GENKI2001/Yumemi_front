import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* reactクエリを用いてAPIを叩く */}
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <AppRouter />
        </CookiesProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

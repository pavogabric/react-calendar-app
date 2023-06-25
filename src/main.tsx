import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactQueryProvider from './core/providers/ReactQueryProvider.tsx';

// TODO add core providers

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
            <ReactQueryProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactQueryProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);

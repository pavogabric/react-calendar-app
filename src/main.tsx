import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryProvider } from './core/providers/index.ts';

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

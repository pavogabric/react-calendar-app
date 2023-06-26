/* eslint-disable import/export */
import { GoogleOAuthProvider } from '@react-oauth/google';
import { cleanup, render } from '@testing-library/react';
import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach } from 'vitest';
import { ReactQueryProvider } from '../core/providers';

afterEach(() => {
    cleanup();
});

const AllProviders: FC<PropsWithChildren> = ({ children }) => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
            <ReactQueryProvider>
                <BrowserRouter>{children}</BrowserRouter>
            </ReactQueryProvider>
        </GoogleOAuthProvider>
    );
};

function customRender(ui: React.ReactElement, options = {}) {
    return render(ui, {
        wrapper: AllProviders,
        ...options,
    });
}

export const mockIntersectionObserver = () => {
    window.IntersectionObserver = vi.fn().mockReturnValue({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    });
};

export const mockResizeObserver = () => {
    window.ResizeObserver = vi.fn().mockReturnValue({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };

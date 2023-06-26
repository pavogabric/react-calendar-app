import { screen } from '@testing-library/react';
import App from './App';
import { render } from './test/test-utils';

describe('App', () => {
    it('should render Login page', () => {
        render(<App />);

        const title = screen.getByText('Welcome to Calendar App!');
        const loginBtn = screen.getByRole('button', { name: 'Login with Google 🚀' });

        expect(title).toBeInTheDocument();
        expect(loginBtn).toBeInTheDocument();
    });
});

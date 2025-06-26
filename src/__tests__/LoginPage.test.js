import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders login form and handles input', () => {
    render(
        <AuthContext.Provider value={{ login: jest.fn() }}>
            <Router>
                <LoginPage />
            </Router>
        </AuthContext.Provider>
    );

    expect(screen.getByText(/login/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
        target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: 'testpass' },
    });

    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('testpass')).toBeInTheDocument();
});
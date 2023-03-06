import { render, screen, fireEvent } from '@testing-library/react';
import { AddForm } from './AddForm';

describe('AddForm component', () => {
    it('should update the form state when user types in the input fields', () => {
        render(<AddForm />);
        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        expect(titleInput.value).toBe('Test Title');

        const imageUrlInput = screen.getByLabelText('Image URL');
        fireEvent.change(imageUrlInput, { target: { value: 'http://test-image-url.com' } });
        expect(imageUrlInput.value).toBe('http://test-image-url.com');

        const descriptionInput = screen.getByLabelText('Description');
        fireEvent.change(descriptionInput, { target: { value: 'Test description' } });
        expect(descriptionInput.value).toBe('Test description');

        const priceInput = screen.getByLabelText('Price');
        fireEvent.change(priceInput, { target: { value: 9.99 } });
        expect(priceInput.value).toBe('9.99');
    });

    it('should submit the form when the submit button is clicked', () => {
        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            useNavigate: () => mockNavigate,
        }));

        const mockFetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
        jest.spyOn(window, 'fetch').mockImplementation(mockFetch);

        render(<AddForm />);
    const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining(process.env.VITE_API_URL), {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                title: '',
                description: '',
                price: '',
                imageUrl: '',
            }),
        });
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
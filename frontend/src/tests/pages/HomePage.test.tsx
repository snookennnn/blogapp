import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/Home/HomePage';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');

test('renders HomePage with posts', () => {
  (useFetch as jest.Mock).mockReturnValue({
    data: [{ id: '1', title: 'Test Post', description: 'Test Description' }],
    loading: false,
    error: null,
  });

  render(<HomePage />);
  expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
});

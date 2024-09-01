import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/UI/Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/Click me/i)).toBeInTheDocument();
});

test('handles click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText(/Click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

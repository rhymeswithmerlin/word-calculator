import { render, screen } from '@testing-library/react';
import App from './App';

test('renders word value text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Word Value/i);
  expect(linkElement).toBeInTheDocument();
});

import App from "./App";
import { render } from '@testing-library/react';

test('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
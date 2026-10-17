import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-github-calendar', () => ({ GitHubCalendar: () => null }));

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));
});

test('renders the name, the email CTA, and a working SPARK link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Shubhkaran\s*Dhillon/);
  expect(screen.getByRole('link', { name: 'shubh.karan30@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:shubh.karan30@gmail.com'
  );
  expect(screen.getByRole('link', { name: /SPARK/ })).toHaveAttribute(
    'href',
    'https://github.com/shubhkaran30546/spark'
  );
});

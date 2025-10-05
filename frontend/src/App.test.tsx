import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test, vi } from 'vitest';

global.fetch = vi.fn();

function createFetchResponse(ok: boolean) {
  return { ok };
}

test('renders success message when backend is healthy', async () => {
  (fetch as ReturnType<typeof vi.fn>).mockResolvedValue(createFetchResponse(true));
  render(<App />);
  const successMessage = await screen.findByText(/Backend is healthy!/i);
  expect(successMessage).toBeInTheDocument();
});

test('renders error message when backend is not healthy', async () => {
  (fetch as ReturnType<typeof vi.fn>).mockResolvedValue(createFetchResponse(false));
  render(<App />);
  const errorMessage = await screen.findByText(/Backend is not healthy./i);
  expect(errorMessage).toBeInTheDocument();
});
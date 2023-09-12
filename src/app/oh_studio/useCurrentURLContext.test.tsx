import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { CurrentURLProvider, useCurrentURL } from './useCurrentURLContext';

describe('CurrentURLContext', () => {

  // Helper component to trigger the useCurrentURL hook.
  const TestComponent: React.FC = () => {
    const { currentURL, setCurrentURL } = useCurrentURL();

    return (
      <>
        <span>{currentURL}</span>
        <button onClick={() => setCurrentURL('testUrl')}>Set URL</button>
      </>
    );
  };

  it('provides default currentURL value and allows updates', () => {
    render(
      <CurrentURLProvider>
        <TestComponent />
      </CurrentURLProvider>
    );

    // Initial URL value is 'home'
    expect(screen.getByText('home'))

    // Click button to set a new URL
    act(() => {
      screen.getByText('Set URL').click();
    });

    // After clicking, URL should change to 'testUrl'
    expect(screen.getByText('testUrl'))
  });

  it('throws an error if useCurrentURL is used outside of CurrentURLProvider', () => {
    // Mock the console.error to suppress the expected error messages in the test output
    jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      "useCurrentURL must be used within a CurrentURLProvider"
    );

    // Restore console.error after the test
    (console.error as jest.Mock).mockRestore();
  });
});

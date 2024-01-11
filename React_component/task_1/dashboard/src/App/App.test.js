import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

// Mocking the alert function
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('<App />', () => {
  let container = null;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
    jest.clearAllMocks();
  });

  test('calls logOut and displays alert on ctrl+h key press', () => {
    const logOutMock = jest.fn();
    act(() => {
      render(<App logOut={logOutMock} />, container);
    });

    // Simulate ctrl+h key press
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');
  });
});

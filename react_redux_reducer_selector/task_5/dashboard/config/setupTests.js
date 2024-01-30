// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import 'jest-canvas-mock';


// setupTests.js
jest.mock('aphrodite', () => ({
    StyleSheet: {
      create: jest.fn().mockReturnValue({}),
    },
    css: jest.fn().mockReturnValue([]),
  }));
  
jest.mock('redux-thunk', () => jest.fn());

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import WithLogging from './WithLogging';

console.log = jest.fn();

describe('WithLogging HOC', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should log mount and unmount messages with "Component" for pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p />);
    render(<WrappedComponent />, container);

    expect(console.log).toHaveBeenCalledWith('Component is mounted on componentDidMount()');

    unmountComponentAtNode(container);

    expect(console.log).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('should log mount and unmount messages with the name of the component for Login component', () => {
    const Login = () => <div>Login component</div>;
    const WrappedLogin = WithLogging(Login);
    render(<WrappedLogin />, container);

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    unmountComponentAtNode(container);

    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

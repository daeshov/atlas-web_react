import React from 'react';
import { render, screen } from '@testing-library/react';
import WithLogging from './WithLogging.js';
import Login from '../Login/Login.js';

let log = jest.spyOn(console, 'log');

describe("Testing the <WithLogging /> Component", () => {
  beforeEach(() => {
    log.mockClear();
  });

  it("Renders the correct children with pure HTML as a child", () => {
    render(
      <WithLogging>
        <p>simple phrase</p>
      </WithLogging>
    );
    expect(log).toHaveBeenCalledWith('Component Component is mounted');
    expect(log).not.toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it("Renders the correct children with <Login /> Component as a child", () => {
    render(
      <WithLogging>
        <Login />
      </WithLogging>
    );
    expect(log).toHaveBeenCalledWith('Component Login is mounted');
    expect(log).not.toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

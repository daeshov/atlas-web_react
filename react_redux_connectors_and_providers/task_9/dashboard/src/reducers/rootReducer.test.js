import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should have the correct initial state structure', () => {
    const initialState = rootReducer(undefined, {});

    // Define the expected initial state structure
    const expectedInitialState = {
      courses: new Map(),
      notifications: new Map(),
      ui: new Map(),
    };

    expect(initialState).toEqual(expectedInitialState);
  });
});

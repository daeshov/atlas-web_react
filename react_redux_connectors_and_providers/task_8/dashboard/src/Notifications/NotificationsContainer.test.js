import React from "react";
import { render, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NotificationsContainer from "./NotificationsContainer";

const mockStore = configureStore([]);

jest.mock("aphrodite");

describe("<NotificationsContainer />", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      notifications: {
        filter: "DEFAULT",
        notifications: [],
      },
    });
  });

  it("fetches notifications on mount", async () => {
    render(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );

    await act(async () => {});

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toBe("FETCH_NOTIFICATIONS_SUCCESS");
  });
});

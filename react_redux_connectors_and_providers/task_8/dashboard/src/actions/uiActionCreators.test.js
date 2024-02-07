import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; 
const mockStore = configureStore(middlewares);

describe("TEST SUIT", () => {
  it("TEST CASE 1: Calling the creator with email = test@test.com and password=123 as arguments should return: { type: LOGIN, user: {email: test@test.com , password: 123} }", () => {
    const expected = {
      type: "LOGIN",
      user: { email: "test@test.com", password: "123" },
    };
    expect(login("test@test.com", "123")).toEqual(expected);
  });

  it("TEST CASE 2: Calling the creator should return: { type: LOGOUT }", () => {
    const expected = { type: "LOGOUT" };
    expect(logout()).toEqual(expected);
  });

  it("TEST CASE 3: Calling the creator should return: { type: DISPLAY_NOTIFICATION_DRAWER }", () => {
    const expected = { type: "DISPLAY_NOTIFICATION_DRAWER" };
    expect(displayNotificationDrawer()).toEqual(expected);
  });

  it("TEST CASE 4: Calling the creator should return: { type: HIDE_NOTIFICATION_DRAWER }", () => {
    const expected = { type: "HIDE_NOTIFICATION_DRAWER" };
    expect(hideNotificationDrawer()).toEqual(expected);
  });
});
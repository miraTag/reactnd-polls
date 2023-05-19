import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { handleLogin, handleLogout } from "../actions/authUser_actions";
jest.mock("../actions/authUser_actions", () => ({
  handleLogin: jest.fn(),
  handleLogout: jest.fn(),
}));

describe("Login", () => {
  it("should display login form when not logged in", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginHeadingElement = getByTestId("login-heading");
    const usernameInputElement = getByTestId("username");
    const passwordInputElement = getByTestId("password");
    const submitButtonElement = getByTestId("submit");

    expect(loginHeadingElement).toBeInTheDocument();
    expect(usernameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });

  it("should redirect to / after login", async () => {
    handleLogin.mockImplementation(() => {
      return async (dispatch) => {
        await Promise.resolve();
        dispatch({ type: "LOGIN_SUCCESS" }); // Simulate successful login
      };
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const usernameInputElement = getByTestId("username");
    const passwordInputElement = getByTestId("password");
    const submitButtonElement = getByTestId("submit");

    fireEvent.change(usernameInputElement, { target: { value: "tylermcginnis" } });
    fireEvent.change(passwordInputElement, { target: { value: "abc321" } });
    fireEvent.click(submitButtonElement);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });


  it("should display login form when logged out", () => {
    handleLogout.mockImplementation(() => {
      return async (dispatch) => {
        await Promise.resolve();
      };
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginHeadingElement = getByTestId("login-heading");
    const usernameInputElement = getByTestId("username");
    const passwordInputElement = getByTestId("password");
    const submitButtonElement = getByTestId("submit");

    expect(loginHeadingElement).toBeInTheDocument();
    expect(usernameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
});

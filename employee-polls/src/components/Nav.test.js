import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import { setAuthUser } from "../actions/authUser_actions";

describe("Nav", () => {
  it("should render the component", () => {
    store.dispatch(setAuthUser({ id: "tylermcginnis", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should display logged in users avatar", () => {
    store.dispatch(setAuthUser({ id: "tylermcginnis", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = component.getByTestId("user-info");
    const imgElement = userSpanElement.querySelector("img");

    expect(imgElement).toBeInTheDocument();
  });
});

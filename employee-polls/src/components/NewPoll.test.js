import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
  it("should render the component with input elements", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionInputElement = getByTestId("firstOption");
    const secondOptionInputElement = getByTestId("secondOption");
    const submitButtonElement = getByTestId("submit-poll");

    expect(firstOptionInputElement).toBeInTheDocument();
    expect(secondOptionInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
});

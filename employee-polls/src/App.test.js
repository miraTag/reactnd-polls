import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {setAuthUser} from "./actions/authUser_actions";

describe("App", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should show Login page when not logged in", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        const heading = component.getByTestId("login-heading");
        expect(heading).toBeInTheDocument();
    });

    it("should show Dashboard page when logged in", () => {
        store.dispatch(setAuthUser({id: "", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );

        const newQuestion = component.getByTestId("new-question");
        expect(newQuestion).toBeInTheDocument();
    });
});

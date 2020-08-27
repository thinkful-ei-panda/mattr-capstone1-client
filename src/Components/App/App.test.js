import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import history from '../../history'

import { Router } from "react-router-dom";

describe(`App Component`, () => {
    describe(`Smoke test`, () => {
        it("should render without crashing", () => {
            const div = document.createElement('div');
            ReactDOM.render(
              <Router history={history}>
                <App />
              </Router>,
              div );
              ReactDOM.unmountComponentAtNode(div);
          });

    })

    describe(`Snapshot test`, () => {
        it(`Renders the UI as expected`, () => {
            const tree = renderer
                .create(
                    <Router history = {history}>
                        <App />
                    </Router>
                )
                .toJSON()
            expect(tree).toMatchSnapshot()
        });
    });

})



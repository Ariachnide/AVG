import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Routes from "./Routes";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <Routes />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

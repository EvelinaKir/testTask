import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {App} from './components/App/App';
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './services/reducers/index'

const composeEnhancers =
  typeof window === "object" && composeWithDevTools
    ? composeWithDevTools({})
    : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
      );

      export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

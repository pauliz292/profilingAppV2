import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import App from "../imports/App";
import { Provider } from "react-redux";
import store from "../imports/redux/store";

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
  );
});
import React from "react";
import ReactDOM from "react-dom";
// React-Chat-Widget vvv
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Widget from "./components/Widget";
import store from "../src/store/store";
// React-Chat-Widget ^^^
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

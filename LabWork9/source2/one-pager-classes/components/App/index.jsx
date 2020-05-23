import React from 'react';
import reactDom from "react-dom";
import "regenerator-runtime/runtime";
import "whatwg-fetch";
import { App } from "./components/App";

reactDom.render(<App />, document.getElementById("root"));

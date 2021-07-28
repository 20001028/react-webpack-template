import * as React from "react";
import * as ReactDOM from "react-dom";
console.log(React);

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
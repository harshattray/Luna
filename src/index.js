import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";

ReactDOM.render(
	<Fragment>
		<GlobalStyles />
		<App />
	</Fragment>,
	document.getElementById("root")
);

/* eslint-disable unicorn/prefer-query-selector */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App as _App } from "./app";
import { persistor, store } from "./redax/store";
import { PersistGate as _PersistGate } from "redux-persist/integration/react";
import { Provider as _provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<_provider store={store}>
			<_PersistGate loading={undefined} persistor={persistor}>
				<_App />
			</_PersistGate>
		</_provider>
	</React.StrictMode>,
);

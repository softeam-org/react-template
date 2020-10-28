import React from "react";
import { Provider } from 'react-redux';

import stores from "./stores";
import Routes from "./routes";

import "./global.css";

const App = () => (
	<Provider store={stores}>
		<Routes />
	</Provider>
);

export default App;
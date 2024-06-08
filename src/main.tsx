import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TransitionProvider from "./components/TransitionProvider";

import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<TransitionProvider>
				<App />
				<Analytics />
			</TransitionProvider>
		</BrowserRouter>
	</React.StrictMode>
);

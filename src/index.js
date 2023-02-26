import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CryptoContext from "./context/CryptoContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CryptoContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CryptoContext>
);

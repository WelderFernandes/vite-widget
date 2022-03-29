import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	whats: {
		primary: "#006666",
		secondary: "#ff9800",
		success: "#4caf50",
	},
	brand: {
		900: "#006666",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const theme = extendTheme({ colors });

// Find all widget divs
const whatsappWidget = document.querySelectorAll(".whatsapp-widget");

whatsappWidget.forEach((Div) => {
	ReactDOM.render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</React.StrictMode>,
		Div
	);
});

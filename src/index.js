import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
	palette: {
		primary: green,
		secondary: {
			main: green[300],
		}
	},
})

const routing = (
	<Router basename={process.env.PUBLIC_URL}>
		<div>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</div>
	</Router>
);

ReactDOM.render(
	routing,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

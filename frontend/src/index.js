import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './bootstrap.min.css'
// import './index.css'
// import App from './App'

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// )

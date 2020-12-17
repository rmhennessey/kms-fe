import React, { useEffect } from 'react'
import ReactGA from 'react-ga' //Google Analytics
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import World from './screens/World'
import Network from './screens/Network'
import Channel from './screens/Channel'
import Watch from './screens/Watch'
import Shop from './screens/Shop'
import KirkFeed from './components/KirkFeed'
import WrapUpMain from './components/WrapUpMain'

const App = () => {
	const history = createBrowserHistory()

	useEffect(() => {
		ReactGA.initialize('185763901')
		ReactGA.pageview(window.location.pathname)
		console.log('google analytic running')
	})

	// Initialize google analytics page view tracking
	history.listen((location) => {
		ReactGA.initialize('185763901')
		ReactGA.set({ page: location.pathname }) // Update the user's current page
		ReactGA.pageview(location.pathname) // Record a pageview for the given page
	})

	return (
		<Router history={history}>
			<Header />
			<Route path='/' component={Home} exact />
			<Route path='/miniverse' component={World} exact />
			<Route path='/network' component={Network} exact />
			<Route path='/network/:slug/:id' component={Channel} />
			<Route path='/watch/:id/:slug' component={Watch} />
			<Route path='/shop' component={Shop} exact />
			<Route path='/kirk' component={KirkFeed} exact />
			<Route path='/wrap' component={WrapUpMain} exact />
			<Footer />
		</Router>
	)
}

export default App

// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
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
// import Playlists from './components/Playlists'

const App = () => {
	return (
		<Router>
			<Header />

			<Route path='/' component={Home} exact />
			<Route path='/miniverse' component={World} exact />
			<Route path='/network' component={Network} exact />
			<Route path='/network/:slug/:id' component={Channel} />
			<Route path='/watch/:id/:slug' component={Watch} />
			<Route path='/shop' component={Shop} exact />
			<Route path='/kirk' component={KirkFeed} exact />
			<Route path='/wrap' component={WrapUpMain} exact />
			{/* <Route path='/playlists' component={Playlists} exact /> */}

			<Footer />
		</Router>
	)
}

export default App

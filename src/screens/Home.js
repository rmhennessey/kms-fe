import React from 'react'
// import Hero from '../components/Hero'
// import Ads from '../components/Ads'
import TwitterFeed from '../components/TwitterFeed'
import YouTubeHome from '../components/YouTubeHome'
import Testimonials from '../components/Testimonials'
import ShopCarousel from '../components/ShopCarousel'
import HomeWorld from '../components/HomeWorld'
import WrapUpMain from '../components/WrapUpMain'

const Home = () => {
	return (
		<div>
			<HomeWorld />
			<WrapUpMain />
			{/* <Ads /> */}
			<TwitterFeed />
			<YouTubeHome />
			<Testimonials />
			<ShopCarousel />
			{/* <Hero /> */}
		</div>
	)
}

export default Home

import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import axios from 'axios'
import Loader from './Loader'
import TimelineTweet from './TimelineTweet'

const SteveFeed = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(true)
	const [steveData, setSteveData] = useState({})

	const getSteveData = async () => {
		try {
			const response = await axios.get(
				`https://kms-be.herokuapp.com/api/twitter/steve`
			)

			// console.log('data---------->', data)
			setSteveData(response)
			setLoading(false)
		} catch (error) {
			console.error('go fish from [STEVE TWITTER FEED] front end')
		}
	}

	useEffect(() => {
		setError(false)
		getSteveData()
	}, [])

	return (
		<>
			{loading ? (
				<>
					<Loader />
					{/* {console.log(loading)}
					{console.log(steveData)} */}
				</>
			) : error === true ? (
				<h2>There was an error</h2>
			) : steveData !== {} ? (
				<div
					css={{
						[mq[0]]: {
							maxHeight: '300px',
							overflowY: 'scroll',
							display: 'flex',
							flexDirection: 'column',
							marginLeft: '10px',
						},
						[mq[1]]: {
							maxHeight: '300px',
							overflowY: 'scroll',
							display: 'flex',
							flexDirection: 'column',
							marginLeft: '10px',
						},
					}}
				>
					<a
						href='https://twitter.com/bigsteve207'
						target='_blank'
						rel='noreferrer'
						style={{ marginTop: '20px', color: '#1f9bcf' }}
					>
						Steve's Latest Tweets
					</a>
					{/* {console.log(steveData)} */}
					{steveData.data.map((tweet) => (
						<TimelineTweet tweet={tweet} key={tweet.id} />
					))}
				</div>
			) : (
				<>
					<p>last case scenario</p>
					{/* {console.log('loading ----->', loading)} */}
					{/* {console.log('kirkData ----->', kirkData)} */}
				</>
			)}
		</>
	)
}

export default SteveFeed

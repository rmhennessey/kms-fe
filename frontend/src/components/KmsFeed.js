import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import axios from 'axios'
import Loader from './Loader'
import TimelineTweet from './TimelineTweet'

const KmsFeed = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(true)
	const [kmsData, setKmsData] = useState({})

	const getKmsData = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/api/twitter/kms`)

			// console.log('data---------->', data)
			setKmsData(response)
			setLoading(false)
		} catch (error) {
			console.error('go fish from [KMS TWITTER FEED] front end')
		}
	}

	useEffect(() => {
		setError(false)
		getKmsData()
	}, [])

	return (
		<>
			{loading ? (
				<>
					<Loader />
					{/* {console.log(loading)}
					{console.log(kmsData)} */}
				</>
			) : error === true ? (
				<h2>There was an error</h2>
			) : kmsData !== {} ? (
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
						href='https://twitter.com/kirkminshow'
						target='_blank'
						rel='noreferrer'
						style={{ marginTop: '20px', color: '#1f9bcf' }}
					>
						KMS's Latest Tweets
					</a>
					{/* {console.log(kmsData)} */}
					{kmsData.data.map((tweet) => (
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

export default KmsFeed

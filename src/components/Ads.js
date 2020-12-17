import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import AdCard from './AdCard'

const Ads = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	const [ads, setAds] = useState([])

	useEffect(() => {
		const getAds = async () => {
			const { data } = await axios.get('https://kms-be.herokuapp.com/api/ads')
			setAds(data)
		}
		getAds()
	}, [])

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<h3
				style={{
					margin: 'auto',
					marginBottom: '1.5rem',
					textAlign: 'center',
				}}
			>
				- Minifan Discounts -
			</h3>
			<div
				css={{
					[mq[0]]: {
						display: 'flex',
						flexDirection: 'column',
						margin: 'auto',
						marginBottom: '3rem',
						marginLeft: '1rem',
						marginRight: '1rem',
					},
					[mq[1]]: {
						display: 'flex',
						flexDirection: 'column',
						margin: 'auto',
						marginBottom: '3rem',
						marginLeft: '1rem',
						marginRight: '1rem',
					},
					[mq[3]]: {
						display: 'flex',
						flexDirection: 'row',
						margin: 'auto',
						marginBottom: '3rem',
						marginLeft: '15px',
						marginRight: '15px',
						flexWrap: 'wrap',
						justifyContent: 'center',
					},
					[mq[4]]: {
						display: 'flex',
						flexDirection: 'row',
						margin: 'auto',
						marginBottom: '3rem',
						marginLeft: '15px',
						marginRight: '15px',
						flexWrap: 'none',
						justifyContent: 'center',
					},
				}}
			>
				{ads.map((ad) => (
					<AdCard ad={ad} key={ad._id} />
				))}
			</div>
		</Container>
	)
}

export default Ads

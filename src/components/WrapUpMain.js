import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import Loader from './Loader'

const WrapUpMain = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(true)
	const [wrapUpData, setWrapUpData] = useState({})
	// const [sortedData, setSortedData] = useState([])
	const [sortedLoading, setSortedLoading] = useState(true)
	const [sortedError, setSortedError] = useState(true)

	useEffect(() => {
		const getWrapUpShow = async () => {
			const { data } = await axios.get(
				'http://localhost:5000/api/youtube/wrap-up'
			)
			setWrapUpData(data)
		}
		getWrapUpShow()

		setSortedLoading(false)
		setLoading(false)
		setError(false)
		setSortedError(false)
	}, [])

	return (
		<Container>
			{loading ? (
				<Loader />
			) : error === true && sortedError === true ? (
				<h2>There was an error</h2>
			) : wrapUpData !== {} &&
			  wrapUpData.items !== [] &&
			  sortedLoading === false ? (
				<>
					{/* {console.log(wrapUpData.items)} */}
					{wrapUpData.items !== [] ? (
						<>
							{wrapUpData.items ? (
								<Row
									css={{
										display: 'flex',
										flexDirection: 'row-reverse',
										margin: 'auto',
										alignItems: 'center',
										marginBottom: '1.5rem',
										[mq[0]]: {
											flexDirection: 'column',
										},
										[mq[4]]: {
											flexDirection: 'row-reverse',
										},
										[mq[5]]: {
											flexDirection: 'row-reverse',
										},
									}}
								>
									<Col>
										<h3
											css={{
												[mq[0]]: {
													marginBottom: '30px',
													textAlign: 'center',
												},
												[mq[1]]: {
													marginBottom: '30px',
													textAlign: 'center',
												},
											}}
										>
											Latest Wrap-Up Show Episode
										</h3>
										{wrapUpData.items[0].snippet.title
											.toLowerCase()
											.includes('wrap') ? (
											<h5
												css={{
													[mq[0]]: {
														textAlign: 'center',
													},
												}}
											>
												{wrapUpData.items[0].snippet.title}
											</h5>
										) : wrapUpData.items[1].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<h5
												css={{
													[mq[0]]: {
														textAlign: 'center',
													},
												}}
											>
												{wrapUpData.items[1].snippet.title}
											</h5>
										) : wrapUpData.items[2].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<h5
												css={{
													[mq[0]]: {
														textAlign: 'center',
													},
												}}
											>
												{wrapUpData.items[2].snippet.title}
											</h5>
										) : wrapUpData.items[3].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<h5
												css={{
													[mq[0]]: {
														textAlign: 'center',
													},
												}}
											>
												{wrapUpData.items[3].snippet.title}
											</h5>
										) : wrapUpData.items[4].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<h5
												css={{
													[mq[0]]: {
														textAlign: 'center',
													},
												}}
											>
												{wrapUpData.items[4].snippet.title}
											</h5>
										) : (
											''
										)}
									</Col>
									<Col
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
										}}
									>
										{wrapUpData.items[0].snippet.title
											.toLowerCase()
											.includes('wrap') ? (
											<iframe
												css={{
													[mq[0]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '304px',
														height: '171px',
													},
													[mq[1]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '336px',
														height: '189px',
													},
													[mq[3]]: {
														width: '736px',
														height: '414px',
													},
													[mq[4]]: {
														width: '336px',
														height: '189px',
													},
													[mq[5]]: {
														width: '624px',
														height: '351px',
													},
												}}
												src={`//www.youtube.com/embed/${wrapUpData.items[0].snippet.resourceId.videoId}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
												title={wrapUpData.items[0].snippet.title}
											></iframe>
										) : wrapUpData.items[1].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<iframe
												css={{
													[mq[0]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '304px',
														height: '171px',
													},
													[mq[1]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '336px',
														height: '189px',
													},
													[mq[3]]: {
														width: '736px',
														height: '414px',
													},
													[mq[4]]: {
														width: '336px',
														height: '189px',
													},
													[mq[5]]: {
														width: '624px',
														height: '351px',
													},
												}}
												src={`//www.youtube.com/embed/${wrapUpData.items[1].snippet.resourceId.videoId}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
												title={wrapUpData.items[1].snippet.title}
											></iframe>
										) : wrapUpData.items[2].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<iframe
												css={{
													[mq[0]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '304px',
														height: '171px',
													},
													[mq[1]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '336px',
														height: '189px',
													},
													[mq[3]]: {
														width: '736px',
														height: '414px',
													},
													[mq[4]]: {
														width: '336px',
														height: '189px',
													},
													[mq[5]]: {
														width: '624px',
														height: '351px',
													},
												}}
												src={`//www.youtube.com/embed/${wrapUpData.items[2].snippet.resourceId.videoId}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
												title={wrapUpData.items[2].snippet.title}
											></iframe>
										) : wrapUpData.items[3].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<iframe
												css={{
													[mq[0]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '304px',
														height: '171px',
													},
													[mq[1]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '336px',
														height: '189px',
													},
													[mq[3]]: {
														width: '736px',
														height: '414px',
													},
													[mq[4]]: {
														width: '336px',
														height: '189px',
													},
													[mq[5]]: {
														width: '624px',
														height: '351px',
													},
												}}
												src={`//www.youtube.com/embed/${wrapUpData.items[3].snippet.resourceId.videoId}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
												title={wrapUpData.items[3].snippet.title}
											></iframe>
										) : wrapUpData.items[4].snippet.title
												.toLowerCase()
												.includes('wrap') ? (
											<iframe
												css={{
													[mq[0]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '304px',
														height: '171px',
													},
													[mq[1]]: {
														marginTop: '20px',
														marginBottom: '30px',
														alignSelf: 'center',
														width: '336px',
														height: '189px',
													},
													[mq[3]]: {
														width: '736px',
														height: '414px',
													},
													[mq[4]]: {
														width: '336px',
														height: '189px',
													},
													[mq[5]]: {
														width: '624px',
														height: '351px',
													},
												}}
												src={`//www.youtube.com/embed/${wrapUpData.items[4].snippet.resourceId.videoId}`}
												frameBorder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowFullScreen
												title={wrapUpData.items[4].snippet.title}
											></iframe>
										) : (
											''
										)}
									</Col>
								</Row>
							) : (
								''
							)}
						</>
					) : (
						''
					)}
				</>
			) : (
				''
			)}
		</Container>
	)
}

export default WrapUpMain

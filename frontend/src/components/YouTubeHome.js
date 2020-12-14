import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'

const YouTubeHome = () => {
	const breakpoints = [320, 375, 414, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<Container
			css={{
				[mq[0]]: {
					marginBottom: '20px',
				},
				[mq[1]]: {},
			}}
		>
			<Row
				css={{
					[mq[0]]: {
						display: 'flex',
						flexDirection: 'column-reverse',
					},
					[mq[1]]: {
						display: 'flex',
						flexDirection: 'column-reverse',
					},
					[mq[4]]: {
						display: 'flex',
						flexDirection: 'row-reverse',
					},
				}}
			>
				<Col
					css={{
						[mq[0]]: {
							margin: 'auto',
							textAlign: 'center',
							marginBottom: '3rem',
						},
						[mq[4]]: {
							display: 'flex',
							flexDirection: 'column',
							marginTop: '0',
							marginBottom: '0',
							justifyContent: 'center',
							paddingLeft: '30px',
							paddingRight: '30px',
						},
					}}
				>
					<h3>KMS YouTube Network</h3>
					<Button
						variant='primary'
						css={{
							[mq[4]]: {
								width: '200px',
								alignSelf: 'center',
								marginTop: '15px',
							},
						}}
					>
						<Link to={`/network`} style={{ color: 'white' }}>
							See All the Channels
						</Link>
					</Button>
				</Col>
				<Col>
					<Link to={`/network`} style={{ color: 'white' }}>
						<Jumbotron
							fluid
							css={{
								[mq[0]]: {
									backgroundColor: 'white',
									marginBottom: '10px',
									paddingBottom: '10px',
								},
								[mq[1]]: {
									backgroundColor: 'white',
									marginBottom: '10px',
									paddingBottom: '10px',
								},
								[mq[2]]: {
									textAlign: 'center',
								},
							}}
						>
							<img
								src='./images/YouTube_Graphic_White.png'
								alt='KMS YouTube Network'
								css={{
									[mq[0]]: {
										width: '290px',
										height: '290px',
									},
									[mq[1]]: {
										width: '350px',
										height: '350px',
									},
									[mq[5]]: {
										width: '425px',
										height: '425px',
									},
								}}
							/>
						</Jumbotron>
					</Link>
				</Col>
			</Row>
		</Container>
	)
}

export default YouTubeHome

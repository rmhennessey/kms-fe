import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'
import PHONE_SMALL from '../assets/hero_328x568.jpg'
import PHONE_XL from '../assets/hero_375x667.jpg'
import PHONE_X from '../assets/hero_414x736.jpg'
import IPAD from '../assets/hero_768x1024.jpg'
import HERO_992 from '../assets/hero_992x1052.jpg'
import IPAD_PRO from '../assets/hero_1024x1366.jpg'
import HERO from '../assets/Minihane_Cast_Hero.jpg'

const HomeWorld = () => {
	const breakpoints = [320, 375, 414, 576, 768, 992, 1024, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<Jumbotron
			id='home-world'
			fluid
			css={{
				// backgroundImage: `url(${PRES})`,
				backgroundColor: 'white',
				marginBottom: '50px',
				paddingBottom: '12px',
				[mq[0]]: {
					backgroundImage: `url(${PHONE_SMALL})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
					marginBottom: '30px',
				},
				[mq[1]]: {
					backgroundImage: `url(${PHONE_XL})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
					// marginBottom: '0px',
					// paddingBottom: '12px',
				},
				[mq[2]]: {
					backgroundImage: `url(${PHONE_X})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
					marginBottom: '50px',
					paddingBottom: '12px',
				},
				[mq[4]]: {
					backgroundImage: `url(${IPAD})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
				},
				[mq[5]]: {
					backgroundImage: `url(${HERO_992})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
				},
				[mq[6]]: {
					backgroundImage: `url(${IPAD_PRO})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
					marginBottom: '1rem',
				},
				[mq[7]]: {
					backgroundImage: `url(${HERO})`,
					backgroundRepeat: 'no-repeat',
					height: '70vh',
					width: '100%',
					marginBottom: '0px',
				},
			}}
		>
			<Container>
				<Row>
					<Col id='home-world-col'>
						<h2
							css={{
								[mq[0]]: {
									fontSize: '2rem',
									color: 'white',
								},
								[mq[1]]: {
									fontSize: '3rem',
									color: 'white',
								},
							}}
						>
							Welcome to The Miniverse
						</h2>
						<h6
							css={{
								fontSize: '1.5rem',
								color: 'white',
								marginBottom: '25px',
								[mq[0]]: {
									color: '#1f9bcf',
								},
							}}
						>
							A World Like No Other
						</h6>
						<p>
							<Button variant='secondary'>
								<Link to='/miniverse'>Explore</Link>
							</Button>
						</p>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default HomeWorld

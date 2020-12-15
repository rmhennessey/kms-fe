import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Container, Card } from 'react-bootstrap'
import PRES from '../assets/El_Pres.png'
import CHAPS from '../assets/Chaps.png'
import KMARKO from '../assets/Kmarko.png'

const Testimonials = () => {
	const breakpoints = [375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

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
				}}
			>
				- Testimonials -
			</h3>
			<div
				css={{
					[mq[0]]: {
						display: 'flex',
						flexDirection: 'column',
						margin: 'auto',
						marginBottom: '3rem',
					},
					[mq[2]]: {
						flexDirection: 'row',
					},
				}}
			>
				<Card
					css={{
						width: '18rem',
						marginBottom: '1rem',
						[mq[2]]: {
							width: '12rem',
							margin: '1rem',
						},
						[mq[3]]: {
							width: '18rem',
							margin: '1rem',
						},
					}}
					// style={{ width: '18rem', marginBottom: '1rem' }}
				>
					<Card.Img variant='top' src={PRES} />
					<Card.Body>
						<Card.Title style={{ textAlign: 'center' }}>
							"Kirk was right"
						</Card.Title>
						<Card.Text style={{ textAlign: 'end' }}>- El Pres</Card.Text>
					</Card.Body>
				</Card>
				<Card
					css={{
						width: '18rem',
						marginBottom: '1rem',
						[mq[2]]: {
							width: '12rem',
							margin: '1rem',
						},
						[mq[3]]: {
							width: '18rem',
							margin: '1rem',
						},
					}}
				>
					<Card.Img variant='top' src={KMARKO} />
					<Card.Body>
						<Card.Title style={{ textAlign: 'center' }}>
							"Kirk was right"
						</Card.Title>
						<Card.Text style={{ textAlign: 'end' }}>- KMarko</Card.Text>
					</Card.Body>
				</Card>
				<Card
					css={{
						width: '18rem',
						marginBottom: '1rem',
						[mq[2]]: {
							width: '12rem',
							margin: '1rem',
						},
						[mq[3]]: {
							width: '18rem',
							margin: '1rem',
						},
					}}
				>
					<Card.Img variant='top' src={CHAPS} />
					<Card.Body>
						<Card.Title style={{ textAlign: 'center' }}>
							"Kirk was right"
						</Card.Title>
						<Card.Text style={{ textAlign: 'end' }}>- Chaps</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</Container>
	)
}

export default Testimonials

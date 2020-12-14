import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Card } from 'react-bootstrap'

const AdCard = ({ ad }) => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<Card
			border='dark'
			css={{
				[mq[0]]: {
					width: '100%',
					margin: 'auto',
					marginBottom: '1rem',
				},
				[mq[1]]: {
					width: '100%',
					margin: 'auto',
					marginBottom: '1rem',
				},
				[mq[3]]: {
					width: '45%',
					// margin: 'auto',
					height: '200px',
					marginLeft: '5px',
					marginRight: '5px',
					marginBottom: '1rem',
				},
				[mq[4]]: {
					width: '13.25rem',
					marginLeft: '5px',
					marginRight: '5px',
					marginBottom: '1rem',
				},
			}}
		>
			<Card.Header
				style={{
					textAlign: 'center',
					backgroundColor: '#1f9bcf',
					borderColor: '#1f9bcf',
					color: 'white',
				}}
			>
				{ad.company}
			</Card.Header>
			<Card.Body
				style={{
					opacity: '0.65',
					backgroundColor: '#1f9bcf',
					borderColor: '#1f9bcf',
				}}
			>
				<Card.Title
					style={{
						textAlign: 'center',
						color: 'white',
					}}
				>
					{ad.discount}
				</Card.Title>
				<Card.Text style={{ textAlign: 'center' }}>
					<a
						href={ad.link}
						target='_blank'
						rel='noreferrer'
						style={{ color: 'white' }}
					>
						Support
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default AdCard

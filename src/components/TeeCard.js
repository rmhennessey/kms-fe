import React from 'react'
import { Card, Button } from 'react-bootstrap'

const TeeCard = ({ tee }) => {
	return (
		<>
			<Card style={{ width: '18rem', margin: '10px' }}>
				<Card.Img variant='top' src={tee.image} />
				<Card.Body style={{ textAlign: 'center' }}>
					<Card.Title>{tee.name}</Card.Title>
					<Button variant='primary'>
						<a
							href={tee.link}
							target='_blank'
							rel='noreferrer'
							style={{ color: 'white' }}
						>
							${tee.price}
						</a>
					</Button>
				</Card.Body>
			</Card>
		</>
	)
}

export default TeeCard

import React from 'react'
import { Card } from 'react-bootstrap'

const CharacterCard = ({ character }) => {
	return (
		<>
			<Card id='character-card'>
				<Card.Body>
					<Card.Title>{character.name}</Card.Title>
					{/* <Card.Subtitle className='mb-2 text-muted'>
						MINIFAN DESIGNATION ???
					</Card.Subtitle> */}
					<Card.Text>{character.bio}</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default CharacterCard

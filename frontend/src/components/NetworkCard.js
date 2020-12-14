import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const NetworkCard = ({ channel }) => {
	let slug = `${channel.snippet.title}`
	slug = slug.replace(/\s+/g, '-').toLowerCase()

	return (
		<>
			<Card style={{ width: '18rem', margin: '10px' }}>
				<Card.Img variant='top' src={channel.snippet.thumbnails.high.url} />
				<Card.Body style={{ textAlign: 'center' }}>
					<Card.Title>{channel.snippet.title}</Card.Title>
					<Card.Text># of Videos: {channel.contentDetails.itemCount}</Card.Text>
					<Button variant='primary'>
						<Link
							to={`/network/${slug}/${channel.id}`}
							style={{ color: 'white' }}
						>
							See All Playlist Videos
						</Link>
					</Button>
				</Card.Body>
			</Card>
		</>
	)
}

export default NetworkCard

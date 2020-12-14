import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const ChannelCard = ({ channel }) => {
	let slug = `${channel.snippet.title}`
	slug = slug.replace(/\s+/g, '-').toLowerCase()

	return (
		<>
			<Link to={`/watch/${channel.contentDetails.videoId}/${slug}`}>
				<Card style={{ width: '18rem', margin: '10px' }}>
					{channel.snippet.playlistId ===
					'PLGYMIoTLaSTU4G8udzpIcwM-A8SiPU93m' ? (
						''
					) : (
						<Card.Img variant='top' src={channel.snippet.thumbnails.high.url} />
					)}
					<Card.Body style={{ textAlign: 'center' }}>
						<Card.Title>{channel.snippet.title}</Card.Title>
						<Button variant='primary'>
							<Link
								to={`/watch/${channel.contentDetails.videoId}/${slug}`}
								style={{ color: 'white' }}
							>
								Watch Episode
							</Link>
						</Button>
					</Card.Body>
				</Card>
			</Link>
		</>
	)
}

export default ChannelCard

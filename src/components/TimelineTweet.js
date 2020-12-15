import React from 'react'
import { Card } from 'react-bootstrap'

const TimelineTweet = ({ tweet }) => {
	return (
		<>
			{tweet.entities.urls.map((link) => (
				<a href={link.url} target='_blank' rel='noreferrer' key={tweet.id}>
					<Card
						style={{
							border: 'none',
							marginTop: '15px',
							// marginBottom: '15px',
							paddingBottom: '15px',
							borderBottom: '1px solid #1f9bcf',
							width: '90%',
						}}
					>
						<Card.Text>{tweet.text}</Card.Text>
					</Card>
				</a>
			))}
		</>
	)
}

export default TimelineTweet

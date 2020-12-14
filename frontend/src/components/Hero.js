import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import PC from '../assets/podcast_jesus.png'

const Hero = () => {
	return (
		<Jumbotron fluid>
			<Container>
				<Row>
					<Col>
						<img
							src={PC}
							alt='Podcast Jesus'
							style={{ width: '450px', height: '450px' }}
						/>
					</Col>
					<Col style={{ margin: 'auto' }}>
						<h1 style={{ fontSize: '3.5rem' }}>Podcast Jesus</h1>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default Hero

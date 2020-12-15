import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PC from '../assets/podcast_jesus.png'

const Footer = () => {
	return (
		<footer style={{}}>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<img
							src={PC}
							alt='Podcast Jesus'
							style={{ width: '150px', height: '150px', marginBottom: '15px' }}
						/>
						<p>Copyright &copy; Podcast Jesus</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer

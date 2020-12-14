import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RIGHT from '../assets/Kirk_Was_Right_Tee.png'
import LIVE from '../assets/KMS_Live_Tee.png'
import KMS from '../assets/KMS_Tee.png'
import WIN from '../assets/Veterans_Fucking_Win_Tee.png'

const ShopCarousel = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<>
			<Container style={{ marginTop: '25px', marginBottom: '35px' }}>
				<Row
					css={{
						[mq[0]]: {
							display: 'flex',
							flexDirection: 'column',
						},
						[mq[1]]: { display: 'flex', flexDirection: 'column' },
						[mq[4]]: { display: 'flex', flexDirection: 'row-reverse' },
					}}
				>
					<Col>
						<Carousel style={{ width: '90%', margin: 'auto' }}>
							<Carousel.Item>
								<img className='d-block w-100' src={RIGHT} alt='First slide' />
								<Carousel.Caption>
									<h5>Kirk Was Right</h5>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={LIVE} alt='Third slide' />

								<Carousel.Caption>
									<h5>KMS Live</h5>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className='d-block w-100' src={KMS} alt='Third slide' />

								<Carousel.Caption>
									<h5 style={{ color: 'white' }}>Kirk Minihane Show</h5>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src={WIN}
									alt='Veterans Fucking Win'
								/>

								<Carousel.Caption>
									<h5 style={{ color: 'white' }}>Veterans Fucking Win</h5>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col
						css={{
							[mq[0]]: {
								textAlign: 'center',
								marginTop: '40px',
							},
							[mq[1]]: { textAlign: 'center', marginTop: '40px' },
							[mq[4]]: {
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							},
						}}
					>
						<h3>
							Tees, Sweatshirts, <br></br> Beanies & More
						</h3>
						<Button
							variant='primary'
							css={{
								[mq[4]]: {
									marginTop: '15px',
									width: '200px',
									alignSelf: 'center',
								},
							}}
						>
							<Link to={`/shop`} style={{ color: 'white' }}>
								See All KMS Gear
							</Link>
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default ShopCarousel

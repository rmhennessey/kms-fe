import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Container } from 'react-bootstrap'

const Watch = ({ match }) => {
	const id = match.params.id
	let slug = match.params.slug

	slug = slug.replace(/-/g, ' ')

	const breakpoints = [320, 375, 414, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<Container style={{ display: 'flex', flexDirection: 'column' }}>
			<h1
				css={{
					marginTop: '30px',
					textAlign: 'center',
					[mq[0]]: {
						fontSize: '1rem',
					},
					[mq[4]]: {
						fontSize: '2rem',
					},
				}}
			>
				{slug}
			</h1>

			<iframe
				css={{
					marginTop: '20px',
					marginBottom: '100px',
					alignSelf: 'center',
					[mq[0]]: {
						width: '304px',
						height: '171px',
					},
					[mq[4]]: {
						width: '736px',
						height: '414px',
					},
					[mq[5]]: {
						width: '880px',
						height: '495px',
					},
				}}
				src={`//www.youtube.com/embed/${id}`}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
				title={slug}
			></iframe>
		</Container>
	)
}

export default Watch

import React from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import KirkFeed from './KirkFeed'
import SteveFeed from './SteveFeed'
import KmsFeed from './KmsFeed'

const TwitterFeed = () => {
	const breakpoints = [320, 375, 576, 768, 992, 1200]
	const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

	return (
		<Container
			css={{
				[mq[0]]: {
					paddingLeft: '5px',
					paddingRight: '5px',
					marginBottom: '3rem',
				},
				[mq[1]]: {
					paddingLeft: '5px',
					paddingRight: '5px',
					marginBottom: '3rem',
				},
			}}
		>
			<Row
				id='twitter-feed-home'
				css={{
					[mq[0]]: {
						display: 'flex',
						flexDirection: 'column-reverse',
						margin: 'auto',
					},
					[mq[1]]: {
						display: 'flex',
						flexDirection: 'column-reverse',
						margin: 'auto',
					},
					[mq[3]]: {
						flexDirection: 'row-reverse;',
					},
				}}
			>
				<Col
					css={{
						[mq[0]]: {
							paddingLeft: '0px',
							paddingRight: '0px',
						},
						[mq[3]]: {
							paddingLeft: '5px',
							paddingRight: '5px',
						},
					}}
				>
					<Tabs
						defaultActiveKey='kirk'
						id='uncontrolled-tab-example'
						style={{ justifyContent: 'center' }}
					>
						<Tab
							eventKey='kirk'
							title='@kirkmin'
							css={{
								[mq[0]]: {
									marginRight: '10px',
								},
								[mq[1]]: {},
							}}
						>
							<KirkFeed />
						</Tab>
						<Tab
							eventKey='steve'
							title='@bigsteve207'
							css={{
								[mq[0]]: {
									marginRight: '10px',
								},
								[mq[1]]: {},
							}}
						>
							<SteveFeed />
						</Tab>
						<Tab
							eventKey='kms'
							title='@kms'
							css={{
								[mq[0]]: {
									marginRight: '10px',
								},
								[mq[1]]: {},
							}}
						>
							<KmsFeed />
						</Tab>
					</Tabs>
				</Col>
				<Col
					css={{
						[mq[0]]: {
							textAlign: 'center',
							marginBottom: '30px',
						},
						[mq[3]]: {
							margin: 'auto',
							textAlign: 'start',
						},
					}}
				>
					<h2
						css={{
							[mq[4]]: {
								paddingLeft: '40px',
							},
							[mq[5]]: {
								paddingLeft: '70px',
							},
						}}
					>
						{' '}
						Tweets from <br></br> the Miniverse
					</h2>
				</Col>
			</Row>
		</Container>
	)
}

export default TwitterFeed

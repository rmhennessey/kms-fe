import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import ChannelCard from '../components/ChannelCard'
import Meta from '../components/Meta'

const Channel = ({ match }) => {
	const id = match.params.id
	let slug = match.params.slug

	slug = slug.replace(/-/g, ' ')

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(true)
	const [channelData, setChannelData] = useState({})

	const getChannelInfo = async () => {
		try {
			const response = await axios.get(
				`https://kms-be.herokuapp.com/api/youtube/playlist/${id}`
			)

			// console.log('data---------->', data)
			setChannelData(response)
			setLoading(false)
		} catch (error) {
			console.error('go fish from [Channel] front end')
		}
	}

	useEffect(() => {
		setError(false)
		getChannelInfo()
	}, [])

	return (
		<div>
			<Meta
				title='KMS YouTube Network | Podcast Jesus'
				description='The Kirk Minihane Show YouTube Network'
			/>
			<Container style={{ display: 'flex', flexDirection: 'column' }}>
				{/* <h1
					style={{
						marginTop: '25px',
						marginBottom: '25px',
						textAlign: 'center',
					}}
				>
					The KMS YouTube Network
				</h1> */}
				{loading ? (
					<>
						<Loader />
						{console.log(loading)}
						{console.log(channelData)}
					</>
				) : error === true ? (
					<h2>There was an error</h2>
				) : channelData !== {} ? (
					<>
						<Link to='/network' style={{ marginTop: '10px', color: '#1f9bcf' }}>
							Back to All Network Shows
						</Link>
						<h1
							style={{
								marginTop: '25px',
								marginBottom: '25px',
								textAlign: 'center',
							}}
						>
							{slug}
						</h1>
						{console.log('channel data ----->', channelData)}
						<div id='playlist-group'>
							{channelData.data.items.map((channel) => (
								<ChannelCard channel={channel} key={channel.id} />
							))}
						</div>
					</>
				) : (
					<>
						<p>last case scenario</p>
						{console.log('loading ----->', loading)}
						{console.log('channelData ----->', channelData)}
					</>
				)}
			</Container>
		</div>
	)
}

export default Channel

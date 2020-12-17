import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import Loader from '../components/Loader'
import NetworkCard from '../components/NetworkCard'
import Meta from '../components/Meta'

const Network = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(true)
	const [playlistData, setPlaylistData] = useState({})

	const getPlaylists = async () => {
		try {
			const response = await axios.get(
				'https://kms-be.herokuapp.com/api/youtube'
			)

			// console.log('data---------->', data)
			setPlaylistData(response)
			setLoading(false)
		} catch (error) {
			console.error('go fish from [Network] front end')
		}
	}

	useEffect(() => {
		setError(false)
		getPlaylists()
	}, [])

	return (
		<div>
			<Meta
				title='KMS YouTube Network | Podcast Jesus'
				description='The Kirk Minihane Show YouTube Network'
			/>
			<Container>
				<h1
					style={{
						marginTop: '25px',
						marginBottom: '25px',
						textAlign: 'center',
					}}
				>
					The KMS YouTube Network
				</h1>
				{loading ? (
					<Loader />
				) : error === true ? (
					<h2>There was an error</h2>
				) : playlistData !== {} ? (
					<>
						{/* {console.log('playlist ----->', playlistData.data)} */}
						<div id='playlist-group'>
							{playlistData.data.items.map((channel) => (
								<NetworkCard channel={channel} key={channel.id} />
							))}
						</div>
					</>
				) : (
					<>
						<p>last case scenario</p>
						{/* {console.log('loading ----->', loading)}
						{console.log('playlist ----->', playlistData)} */}
					</>
				)}
			</Container>
		</div>
	)
}

export default Network

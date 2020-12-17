import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TeeCard from '../components/TeeCard'
import { Container } from 'react-bootstrap'
import Meta from '../components/Meta'

const Shop = () => {
	const [tees, setTees] = useState([])

	useEffect(() => {
		const getTees = async () => {
			const { data } = await axios.get('https://kms-be.herokuapp.com/api/shop')
			setTees(data)
		}
		getTees()
	}, [])

	return (
		<>
			<Meta
				title='Shop Kirk Minihane Show Gear | Podcast Jesus'
				description='Gear from The Kirk Minihane Show Shop on Barstool Sports'
			/>
			<Container id='shop'>
				<h1 style={{ textAlign: 'center' }}>
					Latest KMS Gear from the Barstool Shop
				</h1>

				<div id='shop-tees'>
					{tees.map((tee) => (
						<TeeCard tee={tee} key={tee._id} />
					))}
				</div>
			</Container>
		</>
	)
}

export default Shop

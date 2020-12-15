import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TeeCard from '../components/TeeCard'
import { Container } from 'react-bootstrap'

const Shop = () => {
	const [tees, setTees] = useState([])

	useEffect(() => {
		const getTees = async () => {
			const { data } = await axios.get('http://localhost:5000/api/shop')
			setTees(data)
		}
		getTees()
	}, [])

	return (
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
	)
}

export default Shop

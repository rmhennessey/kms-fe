import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const MToS = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getCharacters = async () => {
			const { data } = await axios.get(
				'http://localhost:5000/api/characters/m-s'
			)
			setCharacters(data)
		}
		getCharacters()
	}, [])

	const sortedCharacters = characters.sort(function (a, b) {
		const nameA = a.name.toUpperCase()
		const nameB = b.name.toUpperCase()
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})

	return (
		<>
			{sortedCharacters.map((character) => (
				<CharacterCard character={character} key={character._id} />
			))}
		</>
	)
}

export default MToS

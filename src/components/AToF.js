import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const AToF = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getCharacters = async () => {
			const { data } = await axios.get(
				'https://kms-be.herokuapp.com/api/characters/a-f'
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

export default AToF

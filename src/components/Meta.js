import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'Podcast Jesus | The Congregation of the Kirk Minihane Show',
	description: 'Podcast Jesus | The Congregation of the Kirk Minihane Show',
	keywords: 'Podcast Jesus, Kirk Minihane, Kirk Minihane Show',
}

export default Meta

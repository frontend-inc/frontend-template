import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'frontend-mui/components'
import { SearchPage } from 'frontend-mui/components/shopify'

const Search: React.FC = () => {
	return (
		<LayoutPage title={'Search'}>
			<Container>
				<SearchPage />
			</Container>
		</LayoutPage>
	)
}

export default Search

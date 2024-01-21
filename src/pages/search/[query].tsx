import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'webstudio-mui/components'
import { SearchPage } from 'webstudio-mui/components/shopify'

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

'use client' 

import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'webstudio-mui/components'
import { SearchPage } from 'webstudio-mui/components/shopify'
import { useParams } from 'next/navigation'

type SearchProps = {
  query: string
}

const Search: React.FC<SearchProps> = (props) => {
  const { query } = props 
	return (
		<LayoutPage title={'Search'}>
      <Container>
			  <SearchPage 
          query={ query }
        />
      </Container>
		</LayoutPage>
	)
}

export default Search

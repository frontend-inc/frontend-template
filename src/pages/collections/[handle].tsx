import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'frontend-mui/components'
import {
	CollectionHero,
	ProductCollection,
} from 'frontend-mui/components/shopify'
import { useRouter } from 'next/router'

const CollectionDetails: React.FC = () => {
	const router = useRouter()
	const { handle } = router.query

	return (
		<LayoutPage title={'Product Detail'}>
			<CollectionHero
				enableOverlay
				bgcolor={'#000000'}
				handle={String(handle)}
			/>
			<Container maxWidth="lg">
				<ProductCollection handle={String(handle)} />
			</Container>
		</LayoutPage>
	)
}

export default CollectionDetails

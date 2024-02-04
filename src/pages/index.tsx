import React from 'react'
import { AuthLayout, LayoutPage } from 'frontend-mui/components'
import { Collections, ProductCollection } from 'frontend-mui/components/shopify'
import { Container } from '@mui/material'

const HomePage: React.FC = () => {
	return (
		<LayoutPage title="Login">
			<AuthLayout>
				<Container maxWidth="lg">
					<ProductCollection handle={'hydrogen'} />
					<Collections />
				</Container>
			</AuthLayout>
		</LayoutPage>
	)
}

export default HomePage

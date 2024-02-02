import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { Address } from 'frontend-mui/components/shopify'

const Addresses: React.FC = () => {
	return (
		<LayoutPage title="Addresses">
			<AuthLayout>
				<Address />
			</AuthLayout>
		</LayoutPage>
	)
}

export default Addresses

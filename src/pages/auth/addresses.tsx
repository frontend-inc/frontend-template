import React from 'react'
import { AuthLayout, LayoutPage } from 'frontend-mui/components'
import { Addresses } from 'frontend-mui/components/shopify'

const AddressesPage: React.FC = () => {
	return (
		<LayoutPage title={'Addresses'}>
			<AuthLayout>
				<Addresses />
			</AuthLayout>
		</LayoutPage>
	)
}

export default AddressesPage

'use client'
import React from 'react'
import { AuthLayout, LayoutPage } from 'webstudio-mui/components'
import { Addresses } from 'webstudio-mui/components/shopify'

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

import React, { useEffect } from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Address } from 'webstudio-mui/components/shopify'

const AddressPage: React.FC = () => {
	return (
		<LayoutPage title='Addresses'>
			<AuthLayout>
				<Address />
			</AuthLayout>
		</LayoutPage>
	)
}

export default AddressPage

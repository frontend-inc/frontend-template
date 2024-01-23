import React, { useEffect } from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { CustomerAccount } from 'webstudio-mui/components/shopify'

const MyAccountPage: React.FC = () => {
	return (
		<LayoutPage title="My Account">
			<AuthLayout>
				<CustomerAccount
					loginUrl={`/login`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default MyAccountPage

import React, { useEffect } from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { CustomerAccount } from 'frontend-mui/components/shopify'

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

'use client'

import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { MyAccount } from 'webstudio-mui/components/shopify'

const MyAccountPage: React.FC = () => {
	return (
		<LayoutPage title="My Account">
			<AuthLayout>
				<MyAccount
					loginUrl={`/login`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default MyAccountPage

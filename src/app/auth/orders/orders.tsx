'use client'

import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Orders } from 'webstudio-mui/components/shopify'

const OrdersPage: React.FC = () => {

	return (
		<LayoutPage title={'Order History'}>
			<AuthLayout>
				<Orders />
			</AuthLayout>
		</LayoutPage>
	)
}

export default OrdersPage

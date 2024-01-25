import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { Orders } from 'frontend-mui/components/shopify'

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

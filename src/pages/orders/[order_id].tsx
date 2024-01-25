import React, { useEffect } from 'react'
import { AuthLayout } from 'frontend-mui/components'
import { Order } from 'frontend-mui/components/shopify'
import { LayoutPage } from 'frontend-mui/components'

const OrderPage: React.FC = () => {

	return (
		<LayoutPage title={'Frontend'}>
			<AuthLayout>
				<Order />
			</AuthLayout>
		</LayoutPage>
	)
}

export default OrderPage

import React, { useEffect } from 'react'
import { AuthLayout } from 'webstudio-mui/components'
import { Order } from 'webstudio-mui/components/shopify'
import { LayoutPage } from 'webstudio-mui/components'

const OrderPage: React.FC = () => {

	return (
		<LayoutPage title={'Webstudio'}>
			<AuthLayout>
				<Order />
			</AuthLayout>
		</LayoutPage>
	)
}

export default OrderPage

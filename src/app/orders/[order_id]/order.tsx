'use client'
import React from 'react'
import { AuthLayout } from 'webstudio-mui/components'
import { Order } from 'webstudio-mui/components/shopify'
import { LayoutPage } from 'webstudio-mui/components'

type OrderPageProps = {
  orderId: string
}

const OrderPage: React.FC<OrderPageProps> = (props) => {

  const { orderId } = props

	return (
		<LayoutPage title={'Webstudio'}>
			<AuthLayout>
				<Order 
          orderId={orderId}
        />
			</AuthLayout>
		</LayoutPage>
	)
}

export default OrderPage

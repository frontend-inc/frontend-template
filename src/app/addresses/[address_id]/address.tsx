'use client'
import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Address } from 'webstudio-mui/components/shopify'

type AddressPageProps = {
  addressId: string
}

const AddressPage: React.FC<AddressPageProps> = (props) => {
  const { addressId } = props 
	return (
		<LayoutPage title='Addresses'>
			<AuthLayout>
				<Address 
          addressId={ addressId }
        />
			</AuthLayout>
		</LayoutPage>
	)
}

export default AddressPage

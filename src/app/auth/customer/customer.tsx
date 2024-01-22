'use client'
import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Customer } from 'webstudio-mui/components/shopify'

const CustomerPage: React.FC = () => {

	return (
    <LayoutPage title={'Addresses'}>
      <AuthLayout>
        <Customer />
      </AuthLayout>
    </LayoutPage>
	)
}

export default CustomerPage

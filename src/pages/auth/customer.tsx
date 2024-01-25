import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { Customer } from 'frontend-mui/components/shopify'

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

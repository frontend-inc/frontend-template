import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { Register } from 'frontend-mui/components/shopify'

const RegisterPage: React.FC = () => {
	return (
		<LayoutPage title='Sign In'>
			<AuthLayout>
				<Register
					loginUrl={`/auth/login`}
					redirectUrl={`/`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default RegisterPage

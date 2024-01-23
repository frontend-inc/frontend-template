import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Register } from 'webstudio-mui/components/shopify'

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

'use client'

import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Login } from 'webstudio-mui/components/shopify'

const LoginPage: React.FC = () => {

	return (
		<LayoutPage title="Webstudio | Login">
			<AuthLayout>
				<Login
					signupUrl={`signup`}
					redirectUrl={`/`}
					forgotPasswordUrl={`/forgot-password`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default LoginPage

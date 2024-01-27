import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { SignIn } from 'frontend-mui/components/shopify'

const SignInPage: React.FC = () => {
	return (
		<LayoutPage title="Frontend | Login">
			<AuthLayout>
				<SignIn
					signupUrl={`signup`}
					redirectUrl={`/`}
					forgotPasswordUrl={`/forgot-password`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default SignIn

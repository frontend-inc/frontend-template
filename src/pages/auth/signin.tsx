import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { SignIn } from 'webstudio-mui/components/shopify'

const SignInPage: React.FC = () => {

	return (
		<LayoutPage title="Webstudio | Login">
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

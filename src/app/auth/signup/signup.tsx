import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { Signup } from 'webstudio-mui/components/shopify'

const SignupPage: React.FC = () => {
	return (
		<LayoutPage title='Sign In'>
			<AuthLayout>
				<Signup
					loginUrl={`/auth/login`}
					redirectUrl={`/`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default SignupPage

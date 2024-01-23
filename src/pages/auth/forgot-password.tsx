import React from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { ChangePassword } from 'webstudio-mui/components/shopify'

const ForgotPasswordPage: React.FC = () => {

	return (
		<LayoutPage title="Forgot Password">
			<AuthLayout>
				<ChangePassword					
					loginUrl={`/login`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default ForgotPasswordPage

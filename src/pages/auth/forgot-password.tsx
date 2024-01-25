import React from 'react'
import { LayoutPage, AuthLayout } from 'frontend-mui/components'
import { ChangePassword } from 'frontend-mui/components/shopify'

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

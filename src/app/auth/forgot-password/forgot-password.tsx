import React, { useEffect } from 'react'
import { LayoutPage, AuthLayout } from 'webstudio-mui/components'
import { ForgotPassword } from 'webstudio-mui/components/shopify'

const ForgotPasswordPage: React.FC = () => {

	return (
		<LayoutPage title="Forgot Password">
			<AuthLayout>
				<ForgotPassword					
					loginUrl={`/login`}
				/>
			</AuthLayout>
		</LayoutPage>
	)
}

export default ForgotPasswordPage

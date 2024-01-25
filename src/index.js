import React from 'react'
import ReactDOM from 'react-dom'
import App from 'pages/_app'
import HttpsNavigate from 'react-https-redirect'
import { AppProvider, AuthProvider, ApiProvider } from 'frontend-mui/context'
import { ProjectProvider } from 'context'
import { API_URL } from 'lib/constants'

const rootElement = document.getElementById('root')

ReactDOM.render(
	<HttpsNavigate>
		<AuthProvider>
			<ApiProvider url={API_URL}>
				<AppProvider>
					<ProjectProvider>
						<App />
					</ProjectProvider>
				</AppProvider>
			</ApiProvider>
		</AuthProvider>
	</HttpsNavigate>,
	rootElement
)

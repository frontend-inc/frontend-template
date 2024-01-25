import React from 'react'
import { AppProvider, ApiProvider, AuthProvider } from 'frontend-mui/context'
import { AppScripts, AppTheme, AppFonts } from 'components'
import { ShopifyStore } from 'frontend-mui/components/shopify'
import { API_URL, USER_AUTH_SERVER_PATH } from 'lib/constants'

type AppShellProps = {
	app: any
	editor?: boolean
	children: React.ReactNode
}

const AppShell: React.FC<AppShellProps> = (props) => {
	const { app, editor = false, children } = props

	return (
    <AppScripts 
      disableAnalytics 
      disableChat={editor}
      app={ app }
    >
      <AppTheme editor={editor} app={app}>
        <AppProvider 
          clientUrl={editor ? app?.editor_url : app?.client_url} 
          logo={app?.logo?.url}
        >
          <ApiProvider
            url={API_URL}
            authCookie={'jwtToken'}
            apiKey={app?.api_key}
          >
            <AuthProvider serverPath={USER_AUTH_SERVER_PATH}>
              {app?.shopify_storefront_access_token && (
                <ShopifyStore
                  shopUrl={app?.shop_url}
                  authCookie={'shopToken'}
                  domain={app?.shopify_domain}
                  storefrontAccessToken={app?.shopify_storefront_access_token}
                >
                  {children}
                </ShopifyStore>
              )}
            </AuthProvider>
          </ApiProvider>
        </AppProvider>
        <AppFonts app={app} />
      </AppTheme>
    </AppScripts>
	)
}

export default AppShell

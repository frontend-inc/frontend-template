import React from 'react'
import { AppProvider, ApiProvider, AuthProvider } from 'frontend-mui/context'
import {
	AuthModal,
	LayoutContainer,
	LayoutLoader,
	LayoutPage,
	Footer,
} from 'frontend-mui/components'
import { ShopifyStore } from 'frontend-mui/components/shopify'
import { API_URL, USER_AUTH_SERVER_PATH } from 'lib/constants'
import { useRouter } from 'next/router'
import AppTheme from './AppTheme'
import AppFonts from './AppFonts'
import AppScripts from './AppScripts'

type AppLayoutProps = {
	title: string
	loading?: boolean
	app: any
	children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
	const router = useRouter()

	const { app, title, loading = false, children } = props

	const handleMenuClick = (path: any) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${app?.client_url}${path}`)
	}

	return (
    <AppScripts disableAnalytics app={ app }>
      <AppTheme app={app}>
        <AppProvider clientUrl={app?.client_url} logo={app?.logo?.url}>
          <ApiProvider
            url={API_URL}
            authCookie={'jwtToken'}
            apiKey={app?.api_key}
          >
            <AuthProvider serverPath={USER_AUTH_SERVER_PATH}>
              <LayoutLoader loading={loading}>
                {app?.shopify_storefront_access_token && (
                  <ShopifyStore
                    shopUrl={app?.shop_url}
                    authCookie={'shopToken'}
                    domain={app?.shopify_domain}
                    storefrontAccessToken={app?.shopify_storefront_access_token}
                  >
                    <LayoutContainer
                      enableShopify
                      enableHeader
                      handleClick={handleMenuClick}
                      mode={app?.mode}
                      menuItems={app?.links}
                      notifications={app?.notifications}
                      topNav={app?.top_nav == true ? true : false}
                      showLabels={app?.navbar_labels}
                      showIcons={app?.navbar_icons}
                    >
                      <LayoutPage title={title}>
                        {children}
                        <Footer
                          name={app?.name}
                          privacyUrl={app?.privacy_url}
                          termsUrl={app?.terms_url}
                          socialUrls={app?.social_urls}
                        />
                      </LayoutPage>										
                    </LayoutContainer>
                  </ShopifyStore>
                )}
              </LayoutLoader>
              <AuthModal logo={app?.logo?.url} />
            </AuthProvider>
          </ApiProvider>
        </AppProvider>
        <AppFonts app={app} />
      </AppTheme>
    </AppScripts>
	)
}

export default AppLayout

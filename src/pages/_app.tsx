import React, { useEffect } from 'react'
import {
  AuthProvider,
	ApiProvider,
	AppProvider,
	ResourceProvider,
  ScriptProvider,
  ThemeProvider
} from 'webstudio-mui/context'
import { ShopifyStore } from 'webstudio-mui/components/shopify'
import { Alert, LayoutContainer } from 'webstudio-mui/components'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { 
  API_URL, 
  API_KEY, 
  CLIENT_URL,
  SHOPIFY_DOMAIN,
  SHOPIFY_STOREFRONT_ACCESS_TOKEN
} from 'lib/constants'
import 'react-multi-carousel/lib/styles.css'
import 'react-medium-image-zoom/dist/styles.css'
import LOGO from 'assets/logo.svg'
import { muiTheme } from 'webstudio-mui/theme'
import { useRouter } from 'next/router'

export default function NextJs({ Component, pageProps }) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

  const router = useRouter()
  const handleMenuClick = (url) => {
    router.push(url)
  }
    
	return (
		<React.Fragment>
			<Head>
				<title>Webstudio</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"
				/>
			</Head>
			<StyledEngineProvider injectFirst>
        <ThemeProvider>
					<CssBaseline />
					<ApiProvider 
            authCookie={'authToken'} 
            url={API_URL}
            apiKey={ API_KEY }
          >            
						<AppProvider 
              logo={LOGO}
              clientUrl={CLIENT_URL} 
            >
              <AuthProvider>
              <ShopifyStore
                shopUrl={'/'}
                authCookie={'shopify-customer-access-token'}
                domain={SHOPIFY_DOMAIN}
                storefrontAccessToken={SHOPIFY_STOREFRONT_ACCESS_TOKEN}
              >				
                <ScriptProvider>
                  <ResourceProvider>
                    <Alert />
                    <LayoutContainer                      
                      enableShopify
                      enableHeader
                      topNav                                            
                      handleClick={handleMenuClick}
                      mode={'light'}
                      menuItems={[
                        {label: 'Home', path: '/', icon: 'Home'},
                      ]}
                      notifications={[
                        {text: 'Notification', path: '/', position: 0}
                      ]}                                            
                    >	
                      <Component {...pageProps} />                    
                    </LayoutContainer>
                  </ResourceProvider>              
                </ScriptProvider>			
              </ShopifyStore>	
              </AuthProvider>
						</AppProvider>
				  </ApiProvider>
			  </ThemeProvider>
		  </StyledEngineProvider>
		</React.Fragment>
	)
}

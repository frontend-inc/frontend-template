import React, { useState, useEffect } from 'react'
import { ScriptProvider } from 'frontend-mui/context'

type AppScriptsProps = {
	app: any
  disableAnalytics?: boolean
  disableChat?: boolean
	children: React.ReactNode
}

const AppScripts: React.FC<AppScriptsProps> = (props) => {
	
  const { 
    app, 
    disableAnalytics=false, 
    disableChat=false,
    children 
  } = props
  
  const [gorgiasChatId, setGorgiasChatId] = useState<string>(null)
  const [okendoSubscriberId, setOkendoSubscriberId] = useState<string>(null)
  const [facebookPixelId, setFacebookPixelId] = useState<string>(null)
  const [segmentWriteKey, setSegmentWriteKey] = useState<string>(null)
  const [tikTokPixelId, setTikTokPixelId] = useState<string>(null)
  const [hotJarId, setHotJarId] = useState<string>(null)
  const [redditPixelId, setRedditPixelId] = useState<string>(null)
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState<string>(null)
  const [googleTagManagerId, setGoogleTagManagerId] = useState<string>(null)
  const [visualWebsiteOptimizerId, setVisualWebsiteOptimizerId] = useState<string>(null)
  const [klaviyoCompanyId, setKlaviyoCompanyId] = useState<string>(null)

  const findAddon = (name: string) => {
    return app?.addons?.find((addon: any) => addon?.handle === name)
  }

  useEffect(() => {
    if(app?.id){
      setOkendoSubscriberId(findAddon('okendo')?.access_token)
      setGorgiasChatId(findAddon('gorgias-chat')?.access_token)
      setFacebookPixelId(findAddon('facebook-pixel')?.access_token)
      setSegmentWriteKey(findAddon('segment')?.access_token)
      setTikTokPixelId(findAddon('tiktok-pixel')?.access_token)
      setHotJarId(findAddon('hotjar')?.access_token)
      setRedditPixelId(findAddon('reddit-pixel')?.access_token)
      setKlaviyoCompanyId(findAddon('klaviyo-forms')?.access_token)
      setGoogleAnalyticsId(findAddon('google-analytics')?.access_token)
      setGoogleTagManagerId(findAddon('google-tag-manager')?.access_token)      
      setVisualWebsiteOptimizerId(findAddon('visual-website-optimizer')?.access_token)
    }
  }, [app?.id])

	return (
		<ScriptProvider
      disableAnalytics={disableAnalytics}
      disableChat={disableChat}
      googleAnalyticsId={googleAnalyticsId}
      googleTagManagerId={googleTagManagerId}      
      gorgiasChatId={gorgiasChatId}
      facebookPixelId={facebookPixelId}
      hotJarId={hotJarId}
      okendoSubscriberId={okendoSubscriberId}
      redditPixelId={redditPixelId}
      segmentWriteKey={segmentWriteKey}
      tikTokPixelId={tikTokPixelId}   
      visualWebsiteOptimizerId={visualWebsiteOptimizerId} 
      klaviyoCompanyId={klaviyoCompanyId}
		>
			{children}
		</ScriptProvider>
	)
}

export default AppScripts

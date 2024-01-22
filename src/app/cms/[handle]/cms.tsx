'use client'

import React from 'react'
import { LayoutPage } from 'webstudio-mui/components'
import { ResourceProvider } from 'webstudio-mui/context'

const Page: React.FC = () => {
	return (
		<LayoutPage title={'Sample Title'}>
			<ResourceProvider>		      
			</ResourceProvider>
		</LayoutPage>
	)
}

export default Page

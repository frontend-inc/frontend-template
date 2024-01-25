import React from 'react'
import { useRouter } from 'next/router'
import { LayoutPage, Fetch } from 'frontend-mui/components'
import { ResourceProvider } from 'frontend-mui/context'

const Page: React.FC = () => {
	const router = useRouter()
  let { handle } = router.query
  if(handle == 'page') handle = null;

	return (
		<LayoutPage title={'Sample Title'}>
			<ResourceProvider>		      
			</ResourceProvider>
		</LayoutPage>
	)
}

export default Page

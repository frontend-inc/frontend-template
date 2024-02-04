import React from 'react'
import { useRouter } from 'next/router'
import { LayoutPage } from 'frontend-mui/components'
import { ResourceProvider } from 'frontend-js/context'
import { Query } from 'frontend-js/components'

const Page: React.FC = () => {
	const router = useRouter()
	let { handle } = router.query
	if (handle == 'page') handle = null

	return (
		<LayoutPage title={'Sample Title'}>
			<ResourceProvider>
        {' '}
      </ResourceProvider>
		</LayoutPage>
	)
}

export default Page

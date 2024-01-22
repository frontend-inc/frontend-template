import React from 'react'
import Collections from './collections'
import { PageProps } from 'types'

const Page = async ({ params }: PageProps) => {  
  const { handle } = params 
  return(
    <Collections handle={ handle } />
  )  
}

export default Page 
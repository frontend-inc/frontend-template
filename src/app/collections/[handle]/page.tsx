import React from 'react'
import { PageProps } from 'types'

const Page = async ({ params }: PageProps) => {  
  const { handle } = params 
  return(
    <p>Collections: { handle } </p>
  )  
}

export default Page 
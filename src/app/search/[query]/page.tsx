import React from 'react'
import { PageProps } from 'types'

const Page = async ({ params }: PageProps) => {  
  const { query } = params 
  return(
    <p>Search: { query } </p>
  )  
}

export default Page 
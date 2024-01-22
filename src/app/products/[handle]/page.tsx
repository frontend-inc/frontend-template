import React from 'react'
import { PageProps } from 'types'
import Products from './Products'

const Page = async ({ params }: PageProps) => {  
  const { handle } = params 
  return(
    <Products handle={handle} />
  )  
}

export default Page 
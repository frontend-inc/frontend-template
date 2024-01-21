import React from 'react'
import { PageProps } from 'types'

const Page = async ({ params }: PageProps) => {  
  const { order_id } = params 
  return(
    <p>Order: { order_id } </p>
  )  
}

export default Page 
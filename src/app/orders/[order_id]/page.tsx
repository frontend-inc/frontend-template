import React from 'react'
import Order from './order'
import { PageProps } from 'types'

const Page = async ({ params }: PageProps) => {  
  const { order_id } = params 
  return(
    <Order orderId={ order_id } />
  )  
}

export default Page 
'use client'
import React from 'react'
import Address from './Address'
import { PageProps } from 'types'

export default async function Page({ params }: PageProps) {  

  const { address_id: addressId } = params 
  return(
    <Address addressId={ addressId } />
  )  
}
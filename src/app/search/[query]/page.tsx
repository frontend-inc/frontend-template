import React from 'react'
import { PageProps } from 'types'
import Search from './Search'

export default async function SearchPage({ params }: PageProps) {  
  const { query } = params 
  return(
    <Search query={ query } />
  )  
}

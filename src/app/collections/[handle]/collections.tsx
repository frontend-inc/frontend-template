'use client'
import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'webstudio-mui/components'
import { CollectionHero, ProductCollection } from 'webstudio-mui/components/shopify'

type CollectionDetailProps = {
  handle: string
}

const CollectionDetails: React.FC<CollectionDetailProps> = (props) => {

  const { handle } = props 

   return (
    <LayoutPage title={'Product Detail'}>
      <CollectionHero 
        enableOverlay
        bgcolor={'#000000'}
        handle={String(handle)}
      />   
      <Container maxWidth="lg">
        <ProductCollection 
          handle={String(handle)}
        />     
      </Container>
    </LayoutPage>
  )
}

export default CollectionDetails
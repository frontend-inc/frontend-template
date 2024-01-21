import React from 'react'
import { Container } from '@mui/material'
import { LayoutPage } from 'webstudio-mui/components'
import { ProductDetailPage } from 'webstudio-mui/components/shopify'
import { ProductRecommendations } from 'webstudio-mui/components/shopify'
import { useRouter } from 'next/router'

const ProductDetail: React.FC = () => {

  const router = useRouter()
  const { handle } = router.query

  return (
    <LayoutPage title={'Product Detail'}>
      <Container maxWidth="lg">
        <ProductDetailPage 
          handle={handle}
          enableFavorites
          enableSubscription
        />
        <ProductRecommendations 
          handle={handle}
        />
      </Container>
    </LayoutPage>
  )
}

export default ProductDetail
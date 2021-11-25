import React from 'react'
import { Page } from "@shopify/polaris";
import ProductList from "../components/ProductList";

function ProductPage({setIsOpen, products}) {
    return(
        <Page
        title="Product Selector"
        primaryAction={{
          content:"Product",
          onAction: ()=> setIsOpen(true)
        }}
        >
          <ProductList products={products}/>
        </Page>
    )
}

export default ProductPage
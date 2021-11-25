import React from 'react' 
import { EmptyState, Card } from '@shopify/polaris';

function ProductEmptyItem ({setIsOpen}) {
    return(
        <Card sectioned>
        <EmptyState
        heading= "Manage the products you want to dispaly"
        action={{
          content:"Select Products",
          onAction: () => setIsOpen(true)
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Select the products you want to use on your banner</p>
        </EmptyState>
      </Card>
    )
}

export default ProductEmptyItem
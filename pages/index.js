import { ResourcePicker} from "@shopify/app-bridge-react"
import React, {useState, useEffect} from 'react';
import ProductPage from "../components/ProductPage";
import ProductEmptyItem from "../components/ProductEmptyItem";

function index(){
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts]= useState([]);
  const [productsId, setProductsId] = useState([]);

  useEffect(() => {
    const ids = products.map((products)=> {
      return {
        id: products.id,
      }
    })
    setProductsId(ids)
  }, [products])

  function handleProductSelection(payload) {
    setIsOpen(false)
    setProducts(payload.selection)
  }

  return(
    <>
      <ResourcePicker
      resourceType="Product"
      open={isOpen}
      onCancel={()=> setIsOpen(false)}
      onSelection={ handleProductSelection}
      initialSelectionIds={productsId}
      />
      {products.length > 0 ? (
        <ProductPage setIsOpen={setIsOpen} products={products}/>
      ) : ( 
        <ProductEmptyItem setIsOpen={setIsOpen}/>
      )}
  </>
  );
}
export default index;

import React from "react"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Shop from "../components/shops/Shop"


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      
      <Shop shopItems={shopItems} addToCart={addToCart} />
      
    </>
  )
}

export default Pages

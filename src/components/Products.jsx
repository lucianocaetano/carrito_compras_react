import {useCart} from "../hocks/cart.hock.js"
import ProductCart from "./product_cart.jsx"
import "./products.css"

export function Products ({products}) {

  const {addToCart, productInToCart, removeToCart} = useCart()


  return (
    <div className="products">
      <h3>Productos</h3>
      <ul>
        {
          products&&products.map((element) => (
            <div key={element.id}>
              <ProductCart element={element} productInToCart={productInToCart} addToCart={addToCart} removeToCart={removeToCart}/>
            </div>
            
          ))
        }
        <li></li>
      </ul>
    </div>
  )
}

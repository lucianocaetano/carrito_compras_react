import {useId} from "react"
import "./Cart.css"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons"
import {useCart} from "../hocks/cart.hock"

function ItemCart ({ItemCart, removeToCart}) {
  return (
    <li>
      <img src={ItemCart.thumbnail} alt="thumbnail product" />

      <div>
        <strong>{ItemCart.title}</strong> - {ItemCart.price}
      </div>

      <footer>
        quantity: {ItemCart.quantity} 
      </footer>

      <button style={
        {
          "background": "white"
        }
      } onClick={
        ()=> removeToCart(ItemCart.id)
      }>
        <RemoveFromCartIcon/>
      </button>
    </li>

  )
}

export default function Cart () {
  const cart_checkbox_id = useId()
  const {state: cart, cleanToCart, removeToCart} = useCart()

  return (
    <div style={
      {
        "overflowY": "scroll"
      }
    }>
      <label htmlFor={cart_checkbox_id} className="cart-button">
        <CartIcon/>
      </label>
      <input type="checkbox" id={cart_checkbox_id} hidden/>

      <aside className="cart">
        <ul>
          {
            cart&&cart.map(element => (
              <ItemCart key={element.id} ItemCart={element} removeToCart={removeToCart}/>
            ))
          }
        </ul>


        <button onClick={()=>cleanToCart()}>
          <ClearCartIcon/>
        </button>
      </aside>
    </div>
  )
}

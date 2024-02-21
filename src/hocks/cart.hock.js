import { useContext } from "react";
import { CartContext } from "../context/cart.context.jsx";
import { CART_ACTON_TYPE } from "../reducers/cart.reducer.js" 

export const useCart = () => {

  const context = useContext(CartContext)
  const {state, dispatch} = context

  if(
    context === undefined
  ){
    throw new Error("Context Cart is undefined")
  }

  const addToCart = product => dispatch({type: CART_ACTON_TYPE.ADD_TO_CART, payload: product})
  const removeToCart = id => dispatch({type: CART_ACTON_TYPE.REMOVE_TO_CART, payload: id})
  const cleanToCart = () => dispatch({type: CART_ACTON_TYPE.CLEAN_TO_CART})
  const productInToCart = product => state.some(element => element.id === product.id)

  return {
    state,
    addToCart,
    removeToCart,
    productInToCart,
    cleanToCart

  }
}

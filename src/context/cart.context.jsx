import {createContext, useReducer, useEffect} from "react";
import { initialState, reducer } from "../reducers/cart.reducer";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{
      state, dispatch
    }}>
      {children}
    </CartContext.Provider>
  )
}


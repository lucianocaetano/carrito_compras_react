
export const initialState= localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []

export const CART_ACTON_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAN_TO_CART: "CLEAN_TO_CART"
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTON_TYPE.ADD_TO_CART]: (state, action) => {
    const productExists = state.some(element => element.id === action.payload.id)
    console.log(state)
    console.log(productExists)
    if( productExists ){
        
      return([
        ... state.filter(element => element.id !== action.payload.id),
        {
          ... action.payload,
          quantity: (state.filter(element => element.id === action.payload.id)[0].quantity +=1)

        }
      ])
    }else {
      return([
        ...state,
        {
          ... action.payload, 
          quantity: 1
        }
      ])

    }

  },
  [CART_ACTON_TYPE.REMOVE_TO_CART]: (state, action) => {
    return state.filter(element => (element.id !== action.payload))
  },
  [CART_ACTON_TYPE.CLEAN_TO_CART]: () => {
    return []
  }
}

export const reducer = (state, action) => {
  switch(action.type){
    case CART_ACTON_TYPE.ADD_TO_CART:
      return (UPDATE_STATE_BY_ACTION.ADD_TO_CART(state, action))
    case CART_ACTON_TYPE.REMOVE_TO_CART: 
      return (UPDATE_STATE_BY_ACTION.REMOVE_TO_CART(state, action))
    case CART_ACTON_TYPE.CLEAN_TO_CART: 
      return (UPDATE_STATE_BY_ACTION.CLEAN_TO_CART())
    default: 
      return localStorage.getItem("cart")
  }
}

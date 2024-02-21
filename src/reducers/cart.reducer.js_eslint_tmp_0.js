
export const initialState=[]

export const CART_ACTON_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAN_TO_CART: "CLEAN_TO_CART"
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTON_TYPE.ADD_TO_CART]: (state, action) => {

    const productExists = state.some(element => element.id === action.payload.id)

      if( productExists ){
          
        return([
          ... state.filter(element => element.id !== action.payload.id),
          {
            ... action.payload.product,
            quantity: (state.filter(element => element.id === action.payload.id)[0].quantity +=1)

          }
        ])
      }else {

        return([
          ...state,
          {
            ... action.payload.product, 
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
    case "ADD_TO_CART": 
      return UPDATE_STATE_BY_ACTION.ADD_TO_CART(state, action) 
    case "REMOVE_TO_CART": 
      return UPDATE_STATE_BY_ACTION.REMOVE_TO_CART(state, action)
    case "CLEAN_TO_CART": 
      return UPDATE_STATE_BY_ACTION.CLEAN_TO_CART()
    default: 
      return state
  }
}

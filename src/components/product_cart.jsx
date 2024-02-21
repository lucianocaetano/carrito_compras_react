import { AddToCartIcon } from "./icons.jsx"

export default function ProductCart({element, productInToCart, addToCart}){

  return (
    <li>
      {
        element&&(
          <>
          <img src={element.thumbnail} alt={element.title} />

            <div>

              <h3>
                <strong>
                  {element.title} - {element.price}
                </strong>
              </h3>
              <p>category: {element.category}</p>
            </div>

            <div>
              <button onClick={()=>{
                addToCart(element)
              }} className={
                productInToCart(element)? "product_active": "product_deactivate"
              }>
              
                <AddToCartIcon/>
                
              </button>
            </div>
          </>
        )
      }

    </li>
  )
}

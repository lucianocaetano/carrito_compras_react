import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { useFilters } from "./hocks/filters.hock"
import Cart from "./components/Cart.jsx"
import {CartProvider} from "./context/cart.context"

function App() {
  const [filters_products] = useFilters()

  return (
    
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filters_products}/>
    </CartProvider>
  )
}

export default App

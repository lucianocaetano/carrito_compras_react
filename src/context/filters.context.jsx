import { createContext, useState } from "react";
import { products as initialProducts } from "../mocks/products.json"

export const FiltersContext = createContext({
  filters: {
    category: "all",
    minPrice: 0
  },
  setFilters: () => {},
  products: initialProducts
})

export const FiltersProvider = ({children}) => {

  const [products] = useState(initialProducts) 

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      
      filters,
      setFilters,
      products
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

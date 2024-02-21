import { useContext } from "react"
import { FiltersContext } from "../context/filters.context"

export function useFilters() {
  const {filters, products} = useContext(FiltersContext)

  const filterProducts = (products) => {


      return products.filter(product => {
        return (
          (product.price > filters.price) && (
            filters.category === "all" ||
            product.category === filters.category
          )
        )
      })
  }
  const filters_products = filterProducts(products)
  return [filters_products]
}

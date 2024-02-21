import {useEffect} from "react"
import "./Filters.css"
import { useState } from "react"
import {useContext} from "react"
import {FiltersContext} from "../context/filters.context"


export function Filters () {
  const {setFilters} = useContext(FiltersContext) 
  const [forms, setForms] = useState({
    category: "all",
    price: 0,
  })
  
  const handleChangeForms = e => {
    if(typeof e.target.value === Number){

      setForms({...forms, [e.target.name]: parseInt(e.target.value)})
    }else{

      setForms({...forms, [e.target.name]: e.target.value})
    }
  }

  useEffect(()=>{
    setFilters(forms)
  }, [forms])


  return (
    <section className="filters">
      <div>
        <label htmlFor="price">
          price:
          <input type="range" name="price" onChange={handleChangeForms} id="price" min="0" max="1000" />
        </label>
        <span>
          {forms.price}
        </span>
      </div>

      <div>
        <label htmlFor="category" >
          categories:
          <select id="category" onChange={handleChangeForms} name="category">
            <option value="all">Todas</option>
            <option value="laptops">Portàtiles</option>
            <option value="smartphones">Celulares</option>
            <option value="home-decoration">decoracion</option>
            <option value="groceries">comestible</option>
            <option value="skincare">proteccion</option>
          </select>
        </label>
      </div>
    </section>

  )
}

import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";
import { ProductContext } from "./ProductContext";



const FilterContext = createContext()

const Initialstate= {
    filter_products : [],
    all_products: [],
    sorting_value: "lowest",
    category_value: "all"
}

const FilterProvider = ({ children }) => {

    const {products} = useContext(ProductContext)

    const [state, dispatch] = useReducer(FilterReducer, Initialstate)

    const sorting = () => {
        dispatch({type: "SORTING"})
    }

    const updateFilterValue = (event) => {
        return dispatch({type: "UPDATE_FILTERS_VALUE"})
    }

    useEffect(()=> {
        dispatch({type: "SORTING_PRODUCTS", payload:products})
        dispatch({type: "FILTER_PRODUCTS", payload:products});
    }, [state.sorting_value, state.category_value, products])


    useEffect(()=> {
        dispatch({type: "FILTER_PRODUCT", payload:products})
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, sorting , updateFilterValue}}>{children}</FilterContext.Provider>
    )

}

export { FilterContext, FilterProvider }
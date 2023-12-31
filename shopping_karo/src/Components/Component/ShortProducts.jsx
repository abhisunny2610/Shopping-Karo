import React, { useContext } from 'react'
import { FilterContext } from '../../Context/FilterContext'

const ShortProducts = () => {

  const { sorting } = useContext(FilterContext)

  return (
    <>
      <form action="">
        <select name="sort" id="sort" onClick={sorting}>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
          <option value="a-z">Name: A - Z</option>
          <option value="z-a">Name: Z - A</option>
        </select>
      </form>
    </>
  )
}


export const SortByCatergory = () => {

  const { updateFilterValue, all_products,} = useContext(FilterContext)

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["all", ...new Set(newVal)]);

  };

  const categoryData = getUniqueData(all_products, "category");

  return (

    <>
      <form action="#">
        <select name="category" id="category" onClick={updateFilterValue}>
          {categoryData.map((curElem, index) => {
            return (
              <option key={index} value={curElem} name="category">
                {curElem}
              </option>
            );
          })}
        </select>
      </form>

    </>

  )
}

export default ShortProducts 
import ListView from "./ListView";
import GridView from "./GridView";
import { useFilterCustomHook } from "../../store/FilterContext";

const ProductList = () => {

  const {filter_products, grid_view} = useFilterCustomHook();
  
  if(grid_view === true)
    {
      return <GridView filter_productsABC={filter_products} />
    }
    else if( grid_view === false)
      {
        return <ListView filter_productsABC={filter_products} />
      }
}

export default ProductList;
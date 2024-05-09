import GridView from "./GridView";
import { useFilterCustomHook } from "../../store/FilterContext";

const ProductList = () => {

  const {filter_products, gridViewFunc} = useFilterCustomHook();
  
  if(gridViewFunc)
    {
      return <GridView productsGrids={filter_products} />
    }
    // else if( gridViewFunc === false)
    //   {
    //     return <ListView productsGrids={filter_products} />
    //   }
}

export default ProductList;
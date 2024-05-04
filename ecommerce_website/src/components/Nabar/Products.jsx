import { useFilterCustomHook } from "../../store/FilterContext";
import ProductList from "../Products-Components/ProductList";
import Sort from "../Products-Components/Sort";
import FilterSection from "../Products-Components/FilterSection";
import classes from "./Products.module.css";


const Products = () => {

    const {filter_products} = useFilterCustomHook();
    console.log(filter_products, 'data of filter products ')

    return <>
    <h2> Lots of products are available here. </h2>
    <center>
    <div className={classes.grid_filter__column}>
        <div>
            <FilterSection></FilterSection>
        </div>
        <section className="product_view__sort">
        <div className="sort_filter">
            <Sort></Sort>
        </div>
        <div className="main_product">
            <ProductList></ProductList>
        </div>
        </section>

    </div>
    </center>
    </>
}

export default Products;
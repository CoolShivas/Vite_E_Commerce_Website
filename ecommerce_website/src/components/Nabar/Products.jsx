import ProductList from "../Products-Components/ProductList";
import Sort from "../Products-Components/Sort";
import FilterSection from "../Products-Components/FilterSection";
import classes from "./Product.module.css";


const Products = () => {
    return <>
    <h2> Lots of products are available here. </h2>
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
    </>
}

export default Products;
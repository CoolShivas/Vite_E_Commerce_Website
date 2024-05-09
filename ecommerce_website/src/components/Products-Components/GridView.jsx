import classes from "./GridView.module.css";
import ProductItems from "../../reducerStore/ProductItems";


const GridView = ({filter_productsABC}) => {

    // console.log(productsGrids);

  return (
    <section className={classes.section_grid__view}>
        <div className={classes.grid_three__column}>
            {filter_productsABC.map((currElement)=>{
                return <ProductItems key={currElement.id} {...currElement} />
            })}
        </div>
    </section>
  )
}

export default GridView;
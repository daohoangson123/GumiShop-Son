import Product from "../../RepeatComponent/ProductGood4Me";
import item1 from '../../../img/item1.png';
import item2 from '../../../img/item2.png';
import './Good4MeDeal.css';


const ProductList = [
    {
        url: item1,
        name: "MULTI-VITAMIN: EVERYDAY WELLNESS",
    },
    {
        url: item2,
        name: "FULL RANGE VALUE PACK (SAVE 33%)",
    },
    {
        url: item1,
        name: "VITAMIN C: IMMUNITY SUPPORT ",
    },
    {
        url: item2,
        name: "IRON: ENERGY SUPPORT",
    },
]

const Good4MeDeal = ({...props}) => {
    return (
        <section className="Good4MeDeal">
            <h2>GOOD4ME DEAL</h2>
            <hr />
            <p>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</p>
            <div className="ProductContainer">
                {ProductList.map((product) => (
                    <div className="ProductItem" key={product.name}>
                        <Product
                        url={product.url}
                        name={product.name}
                        prices={product.prices}
                    />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Good4MeDeal;
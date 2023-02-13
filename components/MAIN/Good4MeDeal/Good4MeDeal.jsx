import Product from "../../RepeatComponent/ProductGood4Me";
import item1 from '../../../img/item1.png';
import item2 from '../../../img/item2.png';
import './Good4MeDeal.css';


const ProductList = [
    {
        url: item1,
        name: "abc",
        prices: "123"
    },
    {
        url: item2,
        name: "abc",
        prices: "123"
    },
    {
        url: item1,
        name: "abc",
        prices: "123"
    },
    {
        url: item2,
        name: "abc",
        prices: "123"
    },
]

const Good4MeDeal = ({...props}) => {
    return (
        <section>
            <h2>GOOD4ME DEAL</h2>
            <hr />
            <p>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</p>
            <div className="ProductContainer">
                {ProductList.map((product) => (
                    <Product
                    url={product.url}
                    name={product.name}
                    prices={product.prices}
                    />
                ))}
            </div>
        </section>
    )
}

export default Good4MeDeal;
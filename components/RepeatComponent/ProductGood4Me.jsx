import './Product.css';

const Product = ({...props}) => {
    return (
        <div className="Product">
            <img className="Product___Img" src={props.url} alt={props.name} />
            <div className="Product__Name">
                {props.name}
            </div>
            <div className="Product__Prices">
                {props.prices}
            </div>
        </div>
    )
}

export default Product;
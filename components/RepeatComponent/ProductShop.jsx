import { Link } from 'react-router-dom';
import './ProductShop.css'

const ProductToShop = ({...props}) => {
    return (
        <div className="ProductShop" style={{top: props.top, left: props.left}}>
            <h2 className="ProductShop__Title">{props.title}</h2>
            <h3 className="ProductShop__Name">{props.name}</h3>
            <p className="ProductShop__Des">{props.des}</p>
            <Link to='/shop' className="ProductShop__Btn">{props.btn}</Link>
        </div>
    )
}

export default ProductToShop;
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import './ProductShop.css';
// import style from './ProductShop.module.css';

const ProductToShop = ({...props}) => {
    return (
        <div className="Product__Banner ">
            <h2 className="ProductBanner__Title">{props.title}</h2>
            <h3 className="ProductBanner__Name">{props.name}</h3>
            <p className="ProductBanner__Des">{props.des}</p>
            <Link to='/shop' className="Product__Btn">{props.btn}</Link>
        </div>
    )
}

export default ProductToShop;
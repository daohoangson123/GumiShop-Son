import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { myCartSelector} from '../../REDUX/Selectors/Selector';
import { addToCart, removeInCart } from '../../REDUX/Actions/Action';
import { useState } from 'react';

const Product = ({id, ...props}) => {
    const dispatch = useDispatch();
    const myCart = useSelector(myCartSelector);
    function handleAddToCart(product){
            if(!added) {
                dispatch(addToCart(product));
                setAdded(true);
            } else {
                setAdded(false);
            }
    }

    console.log(Object.values(myCart));

    const [added, setAdded] = useState(false);

    return (
        <div className="Product">
            <div className="Product__Img-Container">
                <img src={props.url} alt={props.name} />
                <div className='AddToCart_Bg' style={{top: added ? 0 : null}}>
                    <button className='AddToCart'
                        onClick={() => 
                            handleAddToCart({
                                img: props.url,
                                name: props.name,
                                price: props.prices,
                            })}>
                            {!added
                            ? "AddToCart"
                            : "Added"
                            }
                    </button>
                </div>
                {props.sale
                ? <div className='Product__Sale'>ON SALE</div>
                : null
                }
            </div>
            <div className="Product__Name" style={props.style}>
                {props.name}
            </div>
            <div className="Product__Prices">
                <span className='SalePrices'>
                    {"$" +props.saleprices + " NZD"}
                </span>
                <span className='Prices'>
                    {props.prices === 0
                    ? null
                    : "$" + props.prices + " NZD"
                    }
                </span>
            </div>
        </div>
    )
}

export default Product;
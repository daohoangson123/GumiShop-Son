import './Cart.css';
import { useSelector } from 'react-redux';
import { myCartSelector } from '../../REDUX/Selectors/Selector';


const Cart = () => {
    const myCart = useSelector(myCartSelector);
    
    return (
        <div className='Cart'>
            <form>
                {myCart.map((item) => (
                    <div className='Cart-Item'>
                        <img src={item.img} alt="" />
                        <div>{item.name}</div>
                        <span>{item.price} NZD</span>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Cart;
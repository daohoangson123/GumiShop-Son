import './ProductDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getApi() {
            let fetchAPI = await fetch ("https://fe21-db.vercel.app/gummi");
            let fetchedAPI = await fetchAPI.json();
            let results = fetchedAPI;
            const productDetailTemp = results.find((product) => product._id.toString() === id);
            setProductDetail(productDetailTemp);
        };

        getApi();
    }, [id]);

    const handleClick = () => {
        window.history.back();
    }

    return (
        <>
        <div>
            {loaded ? null : <div>Loading...</div>}
        </div>
        <div className='ProductDetail' style={{display: loaded ? "block" : "none"}}>
            <div className='BackBtnContainer'>
                <div className='BackBtnContainer-Border'></div>
                <button className='BackBtn' onClick={handleClick}>Go Back</button>
            </div>
            <div className='ProductDetail_Container'>
                <div className='ProductDetail_Img-Container'>
                    <img src={productDetail.img} alt={productDetail.name} onLoad={() => setLoaded(true)}/>
                </div>
                <div className='Content_Container'>
                    <h2>{productDetail.name}</h2>
                    <p className='Detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, harum cum ab aperiam porro totam facilis sunt distinctio quo similique odit quam laudantium ex debitis neque quae? Porro, eligendi aliquid.</p>
                    <div className="Product__Prices">
                        <span className='SalePrices'>
                            Discount price: {"$" +productDetail.price + " NZD"}
                        </span>
                        <span className='Saving'>
                            Saving: {"$" + productDetail.discouter+ " NZD"}
                        </span>
                    </div>
                    <div>
                            <i className="fa-solid fa-cart-plus Cart"></i>
                        <button className='AddToCartBtn'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;
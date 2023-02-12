import heroBanner from '../../../img/HeroBanner.png';
import ProductShop from '../../RepeatComponent/ProductShop';
import './HeroBanner.css'

const HeroBanner = () => {
    return (
        <div className='HeroBanner flex'>
            <div className='HeroBanner__Slide relative'>
                <img src={heroBanner} alt="banner" className='HeroBanner__Img hidden sm:block '/>
                <ProductShop
                title="Good4Me"
                name="Apple Cider Vinegar"
                des="Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime."
                btn="SHOP NOW"
                />
            </div>
        </div>
    )
}

export default HeroBanner;
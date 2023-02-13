import heroBanner from '../../../img/HeroBanner.png';
import heroBanner2 from '../../../img/HeroBanner1.png';
import ProductShop from '../../RepeatComponent/ProductShop';
import './HeroBanner.css'

const Banner1 = {
        bgUrl: heroBanner,
        title: "Good4Me",
        name: "Apple Cider Vinegar",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const Banner2 = {
        bgUrl: heroBanner2,
        title: "Good4Me",
        name: "Apple Cider Vinegar",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const HeroBanner = () => {

    return (
        <div className='HeroBanner flex'>
            <div className='HeroBanner__Container '>
                <div className='Banner Banner1' style={{backgroundImage: `url(${Banner1.bgUrl})`}}>
                    <ProductShop
                    title={Banner1.title}
                    name={Banner1.name}
                    des={Banner1.des}
                    btn="SHOP NOW"
                    />
                </div>
                <div className='Banner Banner2' style={{backgroundImage: `url(${Banner2.bgUrl})`}}>
                    <ProductShop
                    title={Banner2.title}
                    name={Banner2.name}
                    des={Banner2.des}
                    btn="SHOP NOW"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
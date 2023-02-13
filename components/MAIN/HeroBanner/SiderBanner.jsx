import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import heroBanner from '../../../img/HeroBanner.png';
import heroBanner2 from '../../../img/HeroBanner2.png';
import ProductShop from '../../RepeatComponent/ProductShop';
import './SliderBanner.css';

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

const SliderBanner = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' items={1} nav={false} dots={false}>
                <div className='SliderContainer'>
                    <div className='SliderBanner' style={{backgroundImage: `url(${Banner1.bgUrl})`}}>
                        <ProductShop
                        title={Banner1.title}
                        name={Banner1.name}
                        des={Banner1.des}
                        btn="SHOP NOW"
                        />
                    </div>
                </div>
                <div className='SliderContainer'>
                    <div className='SliderBanner' style={{backgroundImage: `url(${Banner2.bgUrl})`}}>
                        <ProductShop
                        title={Banner2.title}
                        name={Banner2.name}
                        des={Banner2.des}
                        btn="SHOP NOW"
                        />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default SliderBanner;
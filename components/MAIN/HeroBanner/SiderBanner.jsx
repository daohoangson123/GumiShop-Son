import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import heroBanner from '../../../img/HeroBanner.png';
import heroBanner1 from '../../../img/HeroBanner1.png';
import ProductShop from '../../RepeatComponent/ProductShop';
import heroBannerBot from '../../../img/HeroBannerBot.png';
import './SliderBanner.css';

const Banner1 = {
        bgUrl: heroBanner,
        title: "Good4Me",
        name: "Apple Cider Vinegar",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const Banner2 = {
        bgUrl: heroBanner1,
        title: "Good4Me",
        name: "MULTI-VITAMIN (3 MONTH SUPPLY)",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const SliderBanner = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' autoplay={false} items={1} nav={false} dots={false} loop>
                <div className='SliderContainer'>
                    <div className='BannerContainer BannerContainer_1' style={{backgroundImage: `url(${Banner1.bgUrl})`}}>
                        <div className='SliderBanner_1'>
                            <ProductShop
                            title={Banner1.title}
                            name={Banner1.name}
                            des={Banner1.des}
                            btn="SHOP NOW"
                            />
                        </div>
                    <div className='Silder1Bot'>
                        <img src={heroBannerBot} alt="" />
                    </div>
                    </div>
                </div>
                <div className='SliderContainer'>
                    <div className='BannerContainer BannerContainer_2' style={{backgroundImage: `url(${Banner2.bgUrl})`}}>
                        <div className='SliderBanner_2'>
                            <ProductShop
                            title={Banner2.title}
                            name={Banner2.name}
                            des={Banner2.des}
                            btn="SHOP NOW"
                            />
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default SliderBanner;
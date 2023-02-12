import { useEffect } from 'react';
import heroBanner from '../../../img/HeroBanner.png';
import heroBanner2 from '../../../img/HeroBanner2.png';
import ProductShop from '../../RepeatComponent/ProductShop';
import './HeroBanner.css'

const Banner1 = {
        bgUrl: heroBanner,
        title: "Good4Me",
        name: "Apple Cider Vinegar",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const Banner2 = {
        top: "50px",
        left: "50px",
        bgUrl: heroBanner2,
        title: "Good4Me",
        name: "Apple Cider Vinegar",
        des: "Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.",
    }

const HeroBanner = () => {useEffect(() => {
    let slides = document.querySelectorAll(".Slider");
    
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    })
    
    let curSlide = 0;
    
    let maxSlide = slides.length - 1;
    
    let nextSlide = document.querySelector(".next");
    
    if (nextSlide) {
    nextSlide.onclick = function () {
        if (curSlide === maxSlide) {
        curSlide = 0;
        } else {
        curSlide++;
        }
        
        slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
        };
    };
    
    let prevSlide = document.querySelector(".prev");
    
    if (prevSlide) {
    prevSlide.onclick = function () {
        if (curSlide === 0) {
        curSlide = maxSlide;
        } else {
        curSlide--;
        }
        
        slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
        };
    };
    
    }, [])


    return (
        <div className='HeroBanner flex'>
            <div className='HeroBanner__Slide '>
                <button className='prev' style={{width: "40px", height: "30px"}}>Prev</button>
                <button className='next' style={{width: "40px", height: "30px"}}>Next</button>
                    <div className='Slider' style={{backgroundImage: `url(${Banner1.bgUrl})`}}>
                        <ProductShop
                        title={Banner1.title}
                        name={Banner1.name}
                        des={Banner1.des}
                        btn="SHOP NOW"
                        />
                    </div>
                    <div className='Slider' style={{backgroundImage: `url(${Banner2.bgUrl})`, backgroundPositionX: "right"}}>
                        <ProductShop
                        top={Banner2.top}
                        left={Banner2.left}
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
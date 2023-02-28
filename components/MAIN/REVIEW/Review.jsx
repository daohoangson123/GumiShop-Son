import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css';
import review_img from '../../../img/review.png';

const reviewData = [
    {
        name: "_Chloe H.",
        review: "“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
        rating: 4,
    },
    {
        name: "_Tess A.",
        review: "“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
        rating: 5,
    }
]

const Review = () => {
    return (
        <section className='Review container'>
            <div className='Reivew__Slider'>
            <OwlCarousel className='owl-theme' items={1} nav={true}>
                {reviewData.map((review) => (
                    <div className='Reivew__Slider-Item' key={review.name}>
                        <div>REAL REVIEWS</div>
                        <div>REAL RESULTS</div>
                        <p>{review.review}</p>
                        <div>{review.name}</div>
                    </div>
                ))}
            </OwlCarousel>
            </div>
            <div>
                <img className='Review__Img' src={review_img} alt="review_img" />
            </div>
        </section>
    )
}

export default Review;
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Good4Me.css';

const Good4Me = () => {

    return (
        <div>
            <OwlCarousel className='owl-theme' autoplay={false} autoplayTimeout={5000} loop={true} dots={false}>
                <div className='item item1'>
                    <h4>1</h4>
                </div>
                <div className='item item2'>
                    <h4>2</h4>
                </div>
                <div className='item item3'>
                    <h4>3</h4>
                </div>
                <div className='item item4'>
                    <h4>4</h4>
                </div>
                <div className='item item5'>
                    <h4>5</h4>
                </div>
            </OwlCarousel>
        </div>
        )
}

export default Good4Me;
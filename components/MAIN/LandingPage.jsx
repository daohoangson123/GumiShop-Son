// import HeroBanner from "../MAIN/HeroBanner/HeroBanner";
import Good4Me from "./Good4Me/Good4Me";
import Good4MeDeal from "./Good4MeDeal/Good4MeDeal";
import SliderBanner from "./HeroBanner/SiderBanner";

const LandingPage = () => {
    return (
        <>
            {/* <HeroBanner /> */}
            <SliderBanner />
            <Good4MeDeal />
            {/* <section>TAKE CONTROL</section>
            <section>OUR PRODUCTS</section>
            <section>CAROUSEL</section>
            <section>SHOP ALL</section>
            <section>LATEST NEWS</section> */}
            <Good4Me />
        </>
    )
}

export default LandingPage;
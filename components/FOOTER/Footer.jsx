import FooterBot from "./FooterBot";
import './Footer.css'
import FooterTop from "./FooterTop";

const Footer = () => {
    return (
        <footer className="container">
            <div className="FooterTopBG"></div>
                <FooterTop />
            <hr />
                <FooterBot />
        </footer>
    )
}

export default Footer;
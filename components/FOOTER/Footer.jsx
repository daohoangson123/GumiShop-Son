import FooterBot from "./FooterBot";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="FooterTopBG"></div>
            <div>
                <div>GOOD4ME</div>
                <div>KEEP IN TOUCH</div>
                <div>MORE INFO</div>
            </div>
            <hr />
                <FooterBot />
        </footer>
    )
}

export default Footer;
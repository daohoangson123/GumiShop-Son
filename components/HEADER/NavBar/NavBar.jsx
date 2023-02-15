import { Link } from "react-router-dom";
import menuIcon1 from "../../../icon/MenuIcon1.png";
import menuIcon2 from "../../../icon/MenuIcon2.png";
import menuIcon3 from "../../../icon/MenuIcon3.png";
import searchIcon from "../../../icon/SearchIcon.svg";
import cartIcon from "../../../icon/CartIcon.svg";
import usertIcon from "../../../icon/UserIcon.png";
import "./NavBar.css"
import { useEffect , useState } from "react";

const Nav_Items = [
    {
        name: "HOME",
        path: "/",
    },{
        name: "SHOP",
        path: "/shop",
    },{
        name: "FAQ'S",
        path: "/faq",
    },{
        name: "STOCKIST",
        path: "/stockist",
    },{
        name: "WHOLESALE",
        path: "/wholesale",
    },{
        name: "CONTACT",
        path: "/contact",
    },
]


const NavBar = () => {
    const [menuvisible, setMenuvisible] = useState("none");

    const toggleMenu = () => {
            if(menuvisible === "none") {
                setMenuvisible("grid")
            } else {
                setMenuvisible("none")
            }
        }
        const mq = window.matchMedia('(min-width: 1025px)');

        useEffect(() => {
        // initial check to toggle something on or off
        toggle();
    
        // returns true when window is => 640px
        mq.addListener(toggle);
    
        // unmount cleanup handler
        return () => mq.removeListener(toggle);
        }, );
    
      // toggle something based on matchMedia event
        const toggle = () => {
        if (mq.matches) {
            setMenuvisible("none");
        }
        };
    return (
        <nav className="NavBar ">
            <button className="MobileMenu "
            onClick={toggleMenu}>
                <img src={menuIcon1} alt="" className="MenuIcon1 MenuIcon " />
                <img src={menuIcon2} alt="" className="MenuIcon2 MenuIcon "/>
                <img src={menuIcon3} alt="" className="MenuIcon3 MenuIcon "/>
            </button>
            <div className="MobileMenu__NavBar"
            style={{display: menuvisible}}>
                {Nav_Items.map((item) => (
                    <Link to={item.path} key={item.name} className='MobileMenu__Item hover:underline '>
                        {item.name}
                    </Link>
                ))}
            </div>
            <h1 className="NavBar__Logo">GOOD<span>4</span>ME.</h1>
            <div className="NavBar__List">
                {Nav_Items.map((item) => (
                    <Link to={item.path} key={item.name} className=' hover:underline '>
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="SearchCart">
                <Link to='/search' >
                    <img className='NavBar__SearchIcon Icon' src={searchIcon} alt="search" />
                </Link>
                <Link to='/signin' >
                    <img className='NavBar__UserIcon Icon' src={usertIcon} alt="cart" />
                </Link>
                <Link to='/cart' >
                    <img className='NavBar__CartIcon Icon' src={cartIcon} alt="cart" />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
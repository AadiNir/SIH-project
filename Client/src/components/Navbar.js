import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css"
import { Link } from "react-router-dom";
function Navbar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>AgroChain</h3>
            <nav ref={navRef}>
                {/* <a href="/#">Home</a> */}
                <Link to = "/">Home</Link>
                <a href="/#">About us</a>
                {/* <a href="/Services">Services</a> */}
                <Link to = "/Services">Services</Link>
                <Link to = "/Login">Login</Link>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>

                </button>
            </nav>
            <button className="nav-btn " onClick={showNavbar}>
                <FaBars/>
            </button>

        </header>
     );
}

export default Navbar;
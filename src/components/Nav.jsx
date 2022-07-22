import Image from '../images/icon.png'
import "../style.css";
import Burger from './Burger';
import NavList from "./NavList";
function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={Image} alt="" />
                <h2>SoupMine</h2>
            </div>
            <div className="burger-nav">
                <Burger />
            </div>
            <div className="nav-links">
                <NavList />
            </div>
        </div>
    );
};

export default Nav;
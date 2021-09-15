import "./nav.css"
import "./cartwidget"
import Cartwidget from "./cartwidget";

const Nav = () => {
    return (
        <nav className="menu">        
             <a href="#">Characters</a>
             <a href="#">Fanzines</a>
             <a href="#">Shop</a>
             <a href="#">About</a>
             <Cartwidget/>
        </nav>
    )
}

export default Nav;
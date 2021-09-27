import CartWidget from "../CartWidget/CartWidget";
import "./nav.css";


const Navbar = ({ onAdd, cart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Cocolin Press</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Characters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Fanzines</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>

          </ul>
          <CartWidget cart={cart} onAdd={onAdd} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
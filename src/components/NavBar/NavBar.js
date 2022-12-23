import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from "react-router-dom"; 

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">Collect-Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/category/Cooperativo" className="nav-link" href="#">Cooperativo</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/JuegosDeCartas" className="nav-link" href="#">Juegos De Cartas</Link>
              </li>
            </ul>
          </div>
          <form className="form-inline">
            <Link to="/cart" className=""><CartWidget/></Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import {Link} from 'react-router-dom'
import "../navbar/navbar.css"
function NavBar() {
    return(
        <nav className="navbar">
            <div className='navbar-brand'>
                <Link to="/">
                    <img src="src\assets\comemat_logo.png" width={150}></img>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/news">Noticias</Link>
            </div>
        </nav>
    )
}

export default NavBar;
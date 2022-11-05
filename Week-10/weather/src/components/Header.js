import { Link, useLocation } from "react-router-dom"

const Header = (props) => {
    const location = useLocation();
    return (
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <Link to="/" className="pure-menu-heading">URL Shortner</Link>
            <ul className="pure-menu-list">
                <li className={location.pathname === '/' ? "pure-menu-item pure-menu-selected" : "pure-menu-item"}><Link to="/" className="pure-menu-link">Home</Link></li>
                <li className={location.pathname === '/contact-us' ? "pure-menu-item pure-menu-selected" : "pure-menu-item"}><Link to="/contact-us" className="pure-menu-link">Contact us</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Header
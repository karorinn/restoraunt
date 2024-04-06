import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="page-header purple garken-3">
            <div className="container">
                <div className="naw-wrapper">
                    <Link to="/" className="brand-logo">SpaReact</Link>
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/karorinn/restoraunt">Repository</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export{Header};

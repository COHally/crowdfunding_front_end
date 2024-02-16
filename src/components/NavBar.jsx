import { Link, Outlet } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Log In</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        <Outlet />
        </div>
    );
}

export default NavBar;
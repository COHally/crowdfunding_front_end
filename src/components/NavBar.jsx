import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./NavBar.css"

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };
        
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Log Out
                        </Link>
                        ) : (
                        <Link to="/login">Login</Link>
                    )}
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/create-user">Create Account</a></li>
                    <li><a href="/create-project">Create Project</a></li>
                </ul>
            </nav>
        <Outlet />
        /* <h1>FOOTER</h1> */
        </div>
    );
}

export default NavBar;
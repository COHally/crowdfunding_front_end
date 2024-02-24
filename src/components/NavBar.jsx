import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";


function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };
        
    return (
        <div>
            <div className="overlay">
                <h1>Ceili</h1>
                <h3>Crowdfunding for connection.</h3>
                <p>Connecting hearts across borders. </p>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    {auth.token ? (
                        <li><a href="/" onClick={handleLogout}>Log Out</a></li>
                    ) : (
                        <li><a href="/login">Login</a></li>
                    )}
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/create-user">Create Account</a></li>
                    <li><a href="/create-project">Create Project</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
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
                <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    {auth.token ? (
                        <ul>
                        <li><a href="/create-project">Create Project</a></li>
                        <li><a href="/" onClick={handleLogout}>Log Out</a></li>
                        </ul>
                    ) : (
                        <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/create-user">Create Account</a></li>
                        </ul>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
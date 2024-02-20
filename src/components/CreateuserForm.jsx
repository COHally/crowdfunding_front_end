import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postCreateuser from "../api/post-createuser/";
import "./CreateuserForm.css"


function CreateuserForm() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.username && userData.password && userData.email) {
            postCreateuser(
                userData.username,
                userData.password,
                userData.email
            ).then((response) => {
                // Handle the response if needed
                // For example, you might want to show a success message
                console.log("User registered successfully:", response);

                // Assuming your API returns a token, you can store it in localStorage
                window.localStorage.setItem("token", response.token);

                // Redirect the user to the home page or any desired location
                navigate("/");
            });
        }
    };
        
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onSubmit={handleSubmit}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    onSubmit={handleSubmit}
                />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onSubmit={handleSubmit}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Create
            </button>
        </form>
    );
}

export default CreateuserForm;

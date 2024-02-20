import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postCreateProject from "../api/post-createproject";



function CreateProjectForm() {
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        image:"",
        is_open: true,
        date_created: new Date().toISOString(),
        owner: "Real Creator",
    });
console.log(projectData)

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (projectData.title && projectData.description && projectData.goal) {
            postCreateProject(
                projectData
                ).then((newproject) => {
                    // Handle the response if needed
                    console.log("Project created successfully:", newproject); 
                
                    // Redirect the user to the project detail page or any desired location
                    navigate(`/project/${newproject.id}`);
                })
                .catch((error) => {
                    // Handle errors, e.g., show an error message to the user
                    console.error("Error creating project:", error);
                });
        }
    };

    
return (
    <form>
        <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                placeholder="Enter project title"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                placeholder="Enter project description"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="goal">Goal:</label>
            <input
                type="number"
                id="goal"
                placeholder="Enter project goal"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="image">Image URL:</label>
            <input
                type="text"
                id="image"
                placeholder="Enter project image URL"
                onChange={handleChange}
            />
        </div>
        <button type="submit" onClick={handleSubmit}>
            Create Project
        </button>
    </form>
    );
}

export default CreateProjectForm;

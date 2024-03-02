import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledgeForm from "../components/CreatePledgeForm";
import ProjectDeleteButton from "../components/ProjectDelete";
// import ProjectUpdateButton from "../components/ProjectUpdate";
import { AuthContext } from "../components/AuthProvider";

function ProjectPage() {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);
    const authContext = useContext(AuthContext);
    
    

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
        
    }

    return (
        <div className="projectview">
            <h2>{project.title}</h2>
            <img className="projectplaceholder" src={project.image} />
            <h3>Desc: {project.description}</h3>
            <h3>Goal: {project.goal}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
       
        <div>
            <ProjectDeleteButton projectId={project.id} />
            {/* <ProjectUpdateButton projectId={project.id}/> */}
        </div>
                  
        <div className="card">
          <CreatePledgeForm projectId={project.id} />
        </div>
    
        </div>
    );
}
    
export default ProjectPage
    
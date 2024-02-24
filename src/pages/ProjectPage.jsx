import { Link, useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledgeForm from "../components/CreatePledgeForm";



function ProjectPage() {

    // Here we use a hook that comes for free in react router called `useParams`
    // to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);

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
            {/* <h3>{`Status: ${project.is_open}`}</h3> */}
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
            
            
            <div className="card">
                <CreatePledgeForm projectId={project.id}/>
            </div>
        </div>
    );
}
    
export default ProjectPage
    
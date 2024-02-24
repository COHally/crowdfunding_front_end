import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";


function ProjectsPage() {
    const { projects, isLoading, error } = useProjects();

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }        

    return (
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}
export default ProjectsPage;

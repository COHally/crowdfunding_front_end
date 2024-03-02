import React from 'react';
import deleteProject from '../api/delete-project';
import { useNavigate } from 'react-router-dom';

function ProjectDeleteButton({ projectId, currentUserId, projectOwner }) {
  const isOwner = currentUserId === projectOwner;
  const navigate = useNavigate();
  
  const handleDelete = async () => {
    try {
      if (isOwner) {
        const authToken = window.localStorage.getItem("token");
        await deleteProject(projectId, authToken);
        console.log('Project deleted successfully');
        navigate("/projects")
      } else {
        console.error('Unauthorized: You are not the owner of this project.');
        // Handle unauthorized deletion, e.g., display a message to the user
        navigate(`/AuthPage`)
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
      // Handle errors, e.g., display an error message to the user
      navigate(`/AuthPage`)
    }
  };

  return (
    <button onClick={handleDelete} disabled={!isOwner}>
      {isOwner ? 'Delete Project' : 'Not Authorized'}
    </button>
  );
}

export default ProjectDeleteButton;
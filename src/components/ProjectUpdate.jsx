// import React, { useState} from 'react';
// import { useParams } from 'react-router-dom';
// import updateProject from '../api/put-updateproject';
// import { useNavigate } from 'react-router-dom';

// function ProjectUpdateButton({ currentUserId, projectOwner }) {
//   const projectId  = useParams();
//   const isOwner = currentUserId === projectOwner;
//   const navigate = useNavigate();
  
//   const [projectData, setProjectData] = useState({
//     title: "",
//     description: "",
//     goal: 0,
//     image:"",
//     is_open: true,
//     date_created: new Date().toISOString(),
//     owner: "currentUserId",
// });
// console.log(projectData)

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setProjectData((prevProjectData) => ({
//         ...prevProjectData,
//         [id]: value,
//         }));
//     };

//     const handleUpdate = async () => {
//           if (isOwner && projectData.title && projectData.description && projectData.goal){ 
//             updateProject(
//                 projectData
//                 ).then((response) => {
//                     console.log("Project updated successfully:", response); 
                
//                     // Redirect the user to the project detail page or any desired location
//                     navigate(`/project/${projectId}`);
//                 })
//                 .catch((error) => {
//                     // Handle errors, e.g., show an error message to the user
//                     console.error("Error creating project:", error);
//                 });
//   };
// }

//   return (
//     <div>
//       <label htmlFor="title">Title:</label>
//       <input
//         type="text"
//         id="title"
//         value={projectData.title}
//         onChange={handleChange}
//         disabled={!isOwner}
//       />
//     <label htmlFor="description">Description:</label>
//       <input
//         type="text"
//         id="description"
//         value={projectData.description}
//         onChange={handleChange}
//         disabled={!isOwner}
//       />
//     <label htmlFor="goal">Goal:</label>
//       <input
//         type="text"
//         id="goal"
//         value={projectData.goal}
//         onChange={handleChange}
//         disabled={!isOwner}
//       />
      
//       <button onClick={handleUpdate} disabled={!isOwner}>
//         {isOwner ? 'Update Project' : 'Not Authorized'}
//       </button>
//     </div>
//   );
// }


// export default ProjectUpdateButton;
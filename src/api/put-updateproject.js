// async function updateProject(projectData, projectId) {
    
//     const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
//     const authToken = window.localStorage.getItem("token");

//     const response = await fetch(url, {
//     method: "PUT", 
//     headers: {
//         Authorization: `Token ${authToken}`,
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         "title": projectData.title,
//         "description": projectData.description,
//         "goal": projectData.goal,
//         "is_open": true,
//         "date_created": new Date().toISOString(),
//         "owner": "",
//         }),
//     });

//     if (!response.ok) {
//         const fallbackError = `Please try again.`;

//         const data = await response.json().catch(() => {
//             throw new Error(fallbackError);
//         });

//         const errorMessage = data?.detail ?? fallbackError;
//         throw new Error(errorMessage);
//     }

//     return response;
// }

// export default updateProject;
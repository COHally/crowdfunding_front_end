async function deleteProject(projectId) {
    
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const authToken = window.localStorage.getItem("token");

    const response = await fetch(url, {
    method: "DELETE", 
    headers: {
        Authorization: `Token ${authToken}`,
    },
    });

    if (!response.ok) {
        const fallbackError = `Please try again.`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return response;
}

export default deleteProject;
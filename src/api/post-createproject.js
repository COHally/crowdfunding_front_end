async function postCreateProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/create-project/`;
    const authToken = window.localStorage.getItem("token");
    // const projectImage = projectData.image ? projectData.image : 

    const response = await fetch(url, {
    method: "post", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
        Authorization: `Token ${authToken}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "title": projectData.title,
        "description": projectData.description,
        "goal": projectData.goal,
        "image": projectData.image,
        "is_open": true,
        "date_created": new Date().toISOString(),
        "owner": "",
        }),
    });

    if (!response.ok) {
        const fallbackError = `Please try again.`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}

export default postCreateProject;
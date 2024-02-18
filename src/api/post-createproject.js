async function postCreateProject(title, description, goal, image, is_open, date_created, owner) {
    const url = `${import.meta.env.VITE_API_URL}/projects/create-project/`;
    const authToken = window.localStorage.getItem("token");
    console.log(authToken);
    const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
        'Authorization': `Bearer ${authToken}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "title": title,
        "description": description,
        "goal": goal,
        "image": image,
        "is_open": is_open,
        "date_created": date_created,
        "owner": owner,
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
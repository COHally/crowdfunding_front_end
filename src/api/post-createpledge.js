async function postCreatePledge(pledgeData) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const authToken = window.localStorage.getItem("token");
    const response = await fetch(url, {
    method: "post", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
        Authorization: `Token ${authToken}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        ...pledgeData
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

export default postCreatePledge;
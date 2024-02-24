async function postCreateuser(userData) {
    const url = `${import.meta.env.VITE_API_URL}/users/create-user/`;
    const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "username": userData.username,
        "password": userData.password,
        "email": userData.email,
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

export default postCreateuser;

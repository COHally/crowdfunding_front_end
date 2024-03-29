async function getUserData() {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
    const token=`Token ${window.localStorage.getItem("token")}`;
   
    
    
    const response = await fetch (url,{ 
        method: "GET",
        headers: {
            "Content-Type": "application/json",    
            "Authorization": token,
        }
    });

    if (!response.ok) {
        const fallbackError = `Error fetching project with id" ${userId}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const usersData = await response.json();
    
    //extract user Ids from the array of user objects
    const userId = usersData.map(user => user.id);
  
    //extracting usernames from the array of user objects
    const userUsername = usersData.map(user => user.username);
    const userEmail = usersData.map(user => user.email);
 
    return usersData;  
   
}
export default getUserData;
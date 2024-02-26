import { useParams } from "react-router-dom";
import useUser from "../hooks/use-user";

function ProfilePage() {

    const { userId } = useParams();
    const { user, isLoading, error } = useUser(userId);

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div className="profileview">
            <h2>{user.username}</h2>
            <h3>Email: {user.email}</h3>
        </div>
    );
}
    
export default ProfilePage
    
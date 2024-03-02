import React, {useContext} from 'react';
import { AuthContext } from '../components/AuthProvider';


function userProfile(){



    const { auth } = useContext(AuthContext);
    const { username, email, userId} =auth;
    console.log(`'auth:', {username}`);


    return(
            <div>
                <h2>User Profile</h2>
                <p>Username: {username}</p>
                <p>User Id: {userId}</p>
            </div>
    );

}
export default userProfile;
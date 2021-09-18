import React from "react";
import { signOut, authentication } from "../../db/firebase";
const DashBoard = ({handleLogout}) => {

    return(
        <>
            <h2>Welcome</h2>
            <button onClick={signOut(authentication)}>Logout</button>
        </>
    )
}
export default DashBoard
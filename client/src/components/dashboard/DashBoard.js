import React, {useState} from "react";
import { signOut, authentication, onAuthStateChanged, get, ref, db} from "../../db/firebase";
const DashBoard = ({handleLogout}) => {
    const [username, setUsername] = useState("")
    authentication.onAuthStateChanged((user) => {
        if (user) {
            get(ref(db, `Users/${user.uid}/`)).then((res) => {
            console.log(res.child('username').val())
            setUsername(res.child('username').val())
            })
        } else {
        }
        })
    return(
        <>
            <h2>Welcome back {username}</h2>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default DashBoard
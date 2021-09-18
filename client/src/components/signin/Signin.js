import React, { useState, useEffect} from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, authentication } from "../../db/firebase.js";
import SignInForm from "./SignInForm.js";
import DashBoard from '../dashboard/DashBoard'

const Signin = () => {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState(false)


  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError()
    setPasswordError()
  }


  function handleLogin() {
    clearErrors()
    signInWithEmailAndPassword(authentication ,email, password)
    .catch((err) => {
      switch(err.code) {
        case "auth/invalid-email":
          console.log(err.message)
          setEmailError("Invalid email")
          break;
        case "auth/user-disabled.":
          setEmailError("Your account is disabled")
          console.log(err.message)
          break;
        case "auth/user-not-found":
          setEmailError("Email not found")
          console.log(err.message)
          break;
        case "auth/wrong-password":
          setPasswordError("Wrong Password.")
          console.log(err.message)
          break;
        case "auth/internal-error":
          setPasswordError("Wrong Password.")
          console.log(err.message)
          break;

        default:
          setPasswordError("Internal Error.")
          console.log(err.message)
          break;

      }
    })
  }
  const handleSignUp = () => {
    clearErrors()
    createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;


      }
    })

  }
  const handleLogOut = () => {
    signOut(authentication)
  }

  const authListener = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }
  useEffect(() => {
    authListener()
  }, [])


  return (
    <div className="App">
      {user ? (
        <DashBoard handleLogout={handleLogOut}/>
        
      ) : (
        <SignInForm 
        email={email}
        setEmail={setEmail}
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}/>
      )}
            
            
    </div>
    
  );
};

export default Signin;

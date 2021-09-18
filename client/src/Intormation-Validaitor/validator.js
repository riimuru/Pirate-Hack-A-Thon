import { createUserWithEmailAndPassword } from "@firebase/auth";
import { authentication } from "../db/firebase";
export default function validateInfo(values) {
    let errors = {};


    // if (!values.username.trim()) {
    //   errors.username = 'Username required';
    // }



    // createUserWithEmailAndPassword(authentication ,values.email, values.password)
    // .then(() => {
    //   console.log("ur signed in")
    // })
    // .catch((err) => {
    //   switch(err.code) {
    //     case "auth/email-already-in-use":
    //       console.log(err.message)
    //       break
    //     case "auth/invalid-email":
    //       errors.email = err.code
    //       console.log(err.message)
    //       break
    //     case "auth/weak-password":
    //       console.log(err.message)
    //       break
    //     default:
    //       console.log(err.message)
    //       break


    //   }
    //   })


      
  
    // if (!values.email) {
    //   errors.email = 'Email required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }

    // if (!values.password) {
    //   errors.password = 'Password is required';
    // } else if (values.password.length < 6) {
    //   errors.password = 'Password should be 6 characters or more';
    // }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }

    return errors;
  }
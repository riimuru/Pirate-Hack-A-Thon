import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signOut } from '@firebase/auth';
import { authentication, set, ref, db, onValue } from '../db/firebase';
import { errorPrefix } from '@firebase/util';
const useValidate = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSignUp = e => {
    e.preventDefault();
    // setErrors(validate(values));
    // setIsSubmitting(true);
    let usernameCheck = ''
    onValue(ref(db, 'Users/'), (snapshot) => {
      snapshot.forEach(function (childnode) {
        if(childnode.child('username').val() === values.username) {
          usernameCheck = childnode.child('username').val()
          return;
        }
      })

    })
    
    if (values.username.length < 3) {
      setErrors({username: "Username must be at least 3 characters"})
    } else if (usernameCheck === values.username) {
      setErrors({username: "Username already used"})
    } else {
      createUserWithEmailAndPassword(authentication,values.email, values.password)
      .then((user) => {
        set(ref(db, `Users/${user.user.uid}`), {
          username: values.username,
          email: values.email,
          password: values.password

        })
        signOut(authentication)
        callback()
        
      })
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use":
            setErrors({email: "Email already in use."})
            console.log(err.message)
            break;
          case "auth/invalid-email":
            setErrors({email: "Invalid email."})
            console.log(err.message)
            break;
          case "auth/weak-password":
            setErrors({password: "Password should be at least 6 characters"})
            console.log(err.message)
            break;
          case  "auth/internal-error":
            setErrors({password: "Password should be at least 6 characters"})
            console.log(err.message)
            break;
          default:
            setErrors({password: err.message})
            console.log(err.message)
            break;


        }
        })

    }
  
    

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }
    },
    [errors]
  );

  return { handleChange, handleSignUp, values, errors};
};

export default useValidate;
import react from 'react'
import './SignIn.css'
const SignInForm = (props) => {
    const {
        email, 
        setEmail,
        password,
        setPassword, 
        handleLogin, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props
    return(

        <section className="login">
            <div className="loginContainer">
                <label>Email:</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password:</label>
                <input 
                type="password"
                required
                value={password}
                onChange={(e => setPassword(e.target.value))}></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <a href="register" onClick={() => setHasAccount(!hasAccount)}>Sign up</a></p>
              </div>
            </div>

        </section>
    )
}
export default SignInForm
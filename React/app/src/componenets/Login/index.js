import React from 'react';


function Login() {

    return(
        <form className="login">
            <input placeholder="email" className="email-input"></input>
            <input placeholder="password" className="pass-input"></input>
            <button className="lgnbtn">Login</button>
        </form>
    )


}

export default Login;
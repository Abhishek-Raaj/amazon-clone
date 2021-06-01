import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import "./login.css";
import {auth} from './firebase';
function Login() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const history=useHistory();
    const signin=(e)=>{
       e.preventDefault();
    //    firebase auth
           auth.signInWithEmailAndPassword(email,password)
           .then((auth)=>{
               if(auth){
                  history.push('/');
               }
           })
           .catch((error)=>{alert(error.message);});
    }
    const register=(e)=>{
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email,password)
         .then((auth)=>{
             if(auth){
                 history.push('/');
             }
         })
         .catch((error)=>{
             alert(error.message);
         })
     //    firebase auth
     }
    return (
        <div className="login">
            <Link to="/">
            <img className="logo" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"/>
            </Link>
            <div className="login_container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                     <h5>Password</h5>
                     <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                     <button className="login_signin_button" type="submit" onClick={signin}>Sign In</button>
                 </form>
                 <p>By signing-in you agree to Amazon's Conditions of Use & Sale.Please see our Privacy Notice,our Cookies Notice and our interest based Ads Notice.</p>
                <button className="login_register_button" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

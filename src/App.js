import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
   const [state,dispatch]=useStateValue();
  useEffect(() => {
     // it will run once when app componenet run
     auth.onAuthStateChanged((authuser)=>{
       if(authuser){
       // the user is loggedin and already login
          dispatch({
            type:"SET_USER",
            user:authuser
          })
       }
       else{
         //the user logged out
         dispatch({
          type:"SET_USER",
          user:null
        })
       }
     })
  }, [])
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
          {/* <Header/> */}
          <Login/> 
        </Route>
        <Route exact path="/checkout">
          <Header/>
          <Checkout/> 
        </Route>
        <Route path="/">
     <Header/>
     <Home/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

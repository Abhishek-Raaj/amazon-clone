import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [state,dispatch]=useStateValue();
    const userauthentication=()=>{
        if(state.user)
            auth.signOut();
    }
    return (
        <div className="header">
            <Link to="/">
             <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"    alt="image"/>
             </Link>
             <div className="header_search">
                <input className="header_searching" type="text" />
                <SearchIcon className="header_searchicon"/>
             </div>
             <div className="header_nav">
                 <Link to= {!state.user && "/login"}>
                 <div className="header_option" onClick={userauthentication}>
                     <span className="header_optionlineone">Hello {state.user? state.user?.email:"Guest"}</span>
                     <span className="header_optionlinetwo">{state.user? 'Sign Out':'Sign In'}</span>
                 </div>
                 </Link>
                 <div className="header_option">
                 <span className="header_optionlineone">Return</span>
                     <span className="header_optionlinetwo">Ordrs</span>
                 </div>
                 <div className="header_option">
                 <span className="header_optionlineone">your</span>
                     <span className="header_optionlinetwo">Prime</span>
                 </div>
                 <Link to="/checkout">
                <div className="header_optionbasket">
                   <ShoppingCartIcon/>
                   <span className="header_optionlinetwo header_basketcount">{state.basket?.length}</span>
                </div>
                </Link>
             </div>
        </div>
    )
}

export default Header;

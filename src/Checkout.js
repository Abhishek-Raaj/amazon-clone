import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
function Checkout() {
    const [state,dispatch]=useStateValue();
    return (
        <div className="checkout">
             <div className="checkout_left">
                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_1500x600_4._CB669477454_.jpg "   alt="image"/>
                 <div className="checkout_title">
                     <h3>{state.user?`Hello, ${state.user?.email}`:"You have logged out"}</h3>
                     <h2>Your Shopping Basket</h2>
                     {state?.basket.map((ele,ind)=>{
                          return <Checkoutproduct ele={ele}/>
                     })}
                 </div>

             </div>
             <div className="checkout_right">
                 <h2>Your Subtotal</h2>
                 <Subtotal/>
             </div>
        </div>
    )
}

export default Checkout;

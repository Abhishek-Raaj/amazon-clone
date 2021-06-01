import React from 'react'
import './checkoutproduct.css';
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';
function Checkoutproduct({ele}) {
    const [state,dispatch]=useStateValue();
    const removefrombasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
             id:ele.id
        });
    }
    return (
        <div className="checkoutproduct">
            <div className="product_image">
                <img src={ele.imageurl} alt="image"/>
            </div>
            <div className="details">
                <p>{ele.title}</p>
                <p className="star">{Array(ele.rating).fill(null).map((ele,ind)=>{
                      return <StarIcon/>   
                   })}</p>
                <p>${ele.price}</p>
                <button onClick={removefrombasket}>REMOVE FROM CART</button>
            </div>
         </div>
    )
}

export default Checkoutproduct;

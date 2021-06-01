import React from 'react'
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function Product({id,title,price,imageurl,rating}) {
    const [state,dispatch]=useStateValue();
    const addtobasket=()=>{
       dispatch({
           type:"ADD_TO_BASKET",
           item: {
             id:id,
             title:title,
             imageurl:imageurl,
             price:price,
             rating:rating
           },
       })
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <div className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product_rating">
                   {Array(rating).fill(null).map((ele,ind)=>{
                      return <StarIcon/>   
                   })}
                   
                </div>
            </div>
            <img src={imageurl}  alt="image"/>
              <button className="product_button" onClick={()=>addtobasket()}>Add to Cart</button>
        </div>
    )
}

export default Product

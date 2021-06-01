import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer'
import './subtotal.css'
function Subtotal() {
    const [state,dispatch]=useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                  renderText={(value)=>(
                      <>
                      <p>Subtotal ({state.basket?.length} items):<strong>{value}</strong></p>
                      <small className="subtotal_gift"><input type="checkbox"/> This order contains gift</small>
                      </>
                  )}
            value={state.basket?.reduce((total,item)=>{
                      return total+item.price;
                  },0)}
            decimalScale={2} 
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
              />
              <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;

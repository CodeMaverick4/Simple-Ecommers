import React, { useState } from 'react';
export const CartContex = React.createContext(null);

const CartContextProvide = ({children})=>{
    const [cartItems,setCartItems] = useState({total:0.00 , items:[]})
    return(
        <CartContex.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContextProvide

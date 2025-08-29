import { useContext, useState } from "react"
import Cart from "./Cart"
import { CartContex } from "../context/cartContext"
import { NavLink } from "react-router-dom"

const Topbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const { cartItems } = useContext(CartContex)
    return (
        <>
            <header >
                <div className="position-relative">
                    <div className="d-flex flex-grow-1">
                        <div className="d-flex flex-grow-1 gap-3 align-items-center justify-content-center">
                            <NavLink to={'/'} className="text-decoration-none text-white" >Home</NavLink>
                            <NavLink to={'/store'} className="text-decoration-none text-white">Store</NavLink>
                            <NavLink to={'/about'} className="text-decoration-none text-white">About</NavLink>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button className="justify-self-end" onClick={() => setOpenCart(prev => !prev)}>Cart</button>
                            <span>{cartItems.items.length}</span>
                        </div>
                    </div>
                    {openCart && <Cart />}
                </div>
            </header >


        </>
    )
}

export default Topbar
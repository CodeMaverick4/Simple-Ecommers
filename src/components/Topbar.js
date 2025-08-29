import { useContext, useState } from "react"
import Cart from "./Cart"
import { CartContex } from "../context/cartContext"
import { NavLink, useLocation } from "react-router-dom"

const Topbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const { cartItems } = useContext(CartContex)
    const location = useLocation();
    console.log(location);
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
            
                <div className="topbar-banner">
                    <h1>The Generic</h1>
                    {location.pathname === '/' &&<div className="d-flex flex-column align-items-center">
                        <button>Get our Latest Album</button>
                        <div className="play-btn">
                            <i class="bi bi-google-play "></i>
                        </div>
                    </div>}
                </div>

        </>
    )
}

export default Topbar
import { useState } from "react"
import Cart from "./Cart"

const Topbar = () => {
    const [openCart,setOpenCart] = useState(false)
    return (
        <>
            <header>
                <div className="d-flex flex-grow-1">
                    <div className="d-flex flex-grow-1 gap-3 align-items-center justify-content-center">
                        <div>Home</div>
                        <div>Store</div>
                        <div>About</div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <button className="justify-self-end" onClick={()=>setOpenCart(prev=> !prev)}>Cart</button>
                        <span>0</span>
                    </div>
                </div>
            </header >
            {openCart && <Cart />}
        </>
    )
}

export default Topbar
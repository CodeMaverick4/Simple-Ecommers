import { useContext } from "react"
import { CartContex } from "../context/cartContext"

const Cart = () => {
    const {cartItems,setCartItems} = useContext(CartContex);
    
    const handleRemoveItem = (title)=>{
        console.log(title)
        const filteredItems = cartItems.filter(item=> item.title !== title);
        setCartItems(filteredItems);
    }
    return (
        <div className="cart shadow-lg">
            <h4 className="text-center fw-semibold mb-3 ">Cart</h4>
            <div className="d-flex justify-content-between align-items-center gap-4 fw-bold fs-5">
                <span>ITEM</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
            </div>

            {cartItems.items.map((ele,index) =>
                <div key={`cartItem_${index}`} className="d-flex justify-content-between align-items-center gap-4 my-2">
                    <div>
                        <img src={ele.imageUrl} alt="" className="rounded-2" width={80} height={80} />
                        <span className="ms-2">Albumn {index+1}</span>
                    </div>
                    <div >$ {ele.price}</div>
                    <div>
                        <input type="text" value={ele.quantity}/>
                        <button className="" onClick={()=>handleRemoveItem(ele.title)}>REMOVE</button>
                    </div>
                </div>)}
            <div>
                <h4 className="my-3 text-end"><b className="">Total </b> $ {cartItems.total} </h4>
            </div>
        </div>
    )
}
export default Cart
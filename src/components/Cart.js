const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]


const Cart = () => {
    return (
        <div className="cart shadow-lg">
            <h4 className="text-center fw-semibold mb-3 ">Cart</h4>
            <div className="d-flex justify-content-between align-items-center fw-bold fs-4">
                <span>ITEM</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
            </div>

            {cartElements.map((ele,index) =>
                <div className="d-flex justify-content-between align-items-center gap-4 my-2">
                    <div>
                        <img src={ele.imageUrl} alt="" className="rounded-2" width={80} height={80} />
                        <span className="ms-2">Albumn {index+1}</span>
                    </div>
                    <div >$ {ele.price}</div>
                    <div>
                        <input type="text" value={ele.quantity}/>
                        <button>REMOVE</button>
                    </div>
                </div>)}
            <div>
                <h4 className="my-3 text-end"><b className="">Total </b> $0.00 </h4>
            </div>
        </div>
    )
}
export default Cart
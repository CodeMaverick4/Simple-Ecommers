
const Topbar = () => {
    return (
        <header>
            <div className="d-flex flex-grow-1">
                <div className="d-flex flex-grow-1 gap-3 align-items-center justify-content-center">
                    <div>Home</div>
                    <div>Store</div>
                    <div>About</div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <button className="justify-self-end">Cart</button>
                    <span>0</span>
                </div>
            </div>
        </header >
    )
}

export default Topbar
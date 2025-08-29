import { useContext } from "react";
import { CartContex } from "../context/cartContext";

const tourArr = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    description: "DTE Energy Music Theatre"
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    description: "Budweiser Stage"
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    description: "Jiffy Lube Live"
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    description: "Ak-Chin Pavilion"
  },
  {
    date: "AUG 02",
    city: "LAS VEGAS, NV",
    description: "T-Mobile Arena"
  },
  {
    date: "AUG 07",
    city: "CONCORD, CA",
    description: "Concord Pavilion"
  }
];

const Home = () => {
    const {cartItems,setCartItems} = useContext(CartContex);
    return (
        <section className="container">
            <h2 className="text-center mb-5 mt-3 fw-bold">TOURS</h2>
            <div className="d-flex flex-column align-items-center gap-3">                
                    {tourArr.map((tour,index ) => (
                        <div className="row w-75 pb-4 border-bottom border-black">
                            <span className="col-3">{tour.date}</span>
                            <span className="col-3">{tour.city}</span>
                            <span className="col-3">{tour.description}</span>
                            <div className="col-3 text-end "><button className="home-btn">BUY TICKETS</button></div>
                        </div>
                    ))}
                </div>            
        </section>
    )
}
export default Home
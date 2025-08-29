import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from 'react-router'
const MainLayout = () => {
    return (
        <div className="position-relative">
            <Topbar />
            
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
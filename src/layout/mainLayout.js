import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Outlet } from 'react-router'
const MainLayout = () => {
    return (
        <div className="position-relative">
            <Topbar />
            <h1>The Generic</h1>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
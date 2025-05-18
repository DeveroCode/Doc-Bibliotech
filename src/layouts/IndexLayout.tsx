import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function IndexLayout() {
    const location = useLocation();
    

    return (
        <>

            <div className={location.pathname === '/' ? `min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white` : ``}>
                <Header />
                <main className="max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </> 
    )
}

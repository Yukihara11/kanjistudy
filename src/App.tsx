import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Bounce, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App() {
    return (
        <div data-theme="dark" className="bg-white dark:bg-gray-900 dark:text-white">
            <header>
                <Header />
            </header>

            <main className="h-[100%]">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>

            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

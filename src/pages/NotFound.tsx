import { Link } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
export default function NotFound() {
    return (
        <>
            <NavBar />
            <main className="w-full h-screen bg-neutral-900 text-white flex justify-center items-center flex-col gap-5">
            <h1 className="text-3xl font-medium">404 Not Found</h1>
            <p className="text-neutral-400">The page you requested is not available</p>
            <Link to='/'
            className="text-neutral-400 underline underline-offset-4 hover:text-blue-600"
            >Home Page</Link >
            </main>
            <Footer />    
        </>
    )
}
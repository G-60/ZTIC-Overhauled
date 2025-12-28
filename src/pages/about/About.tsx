import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import zbuilding from '@/assets/images/ztic_building.jpeg'
export default function About() {
    const img = zbuilding
    return (
        <>
        <NavBar />
        <main className="w-full h-screen">
        <div>
            <img src={img} alt="ztic building"
            className="bg-cover w-full h-screen saturate-125"/>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        </main>
        <Footer />
        </>
    )
}
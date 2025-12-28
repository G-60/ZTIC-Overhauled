import { useEffect } from "react";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
function Portals() {
        useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        }, []);
    
    return (
        <>
        <NavBar />
        <Title name="Portals" />
        <div className="w-full h-100 flex justify-center items-center flex-wrap">
            <div className="
            border-2 border-orange-400 rounded-xl flex justify-center items-center p-2 w-40 h-40 shadow-md
            hover:scale-102 hover:shadow-2xl transition-all m-5 bg-neutral-100 cursor-pointer hover:border-3
            ">
                <h2 className="
                text-md
                ">Student Portal</h2>
            </div>
            <div className="
            border-2 border-orange-400 rounded-xl flex justify-center items-center p-2 w-40 h-40 shadow-md
            hover:scale-102 hover:shadow-2xl transition-all m-5 bg-neutral-100 cursor-pointer hover:border-3
            ">
                <h2 className="
                text-md
                ">Employee Portal</h2>
            </div>
            <div></div>
        </div>
        <Footer />
        </>
    )
}
export default Portals
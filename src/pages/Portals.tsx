import { useEffect } from "react";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import AnimatedContent from "@/components/AnimatedContent";
function Portals() {
        useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        }, []);
    
    return (
        <>
        <NavBar />
        <Title name="Portals" />
        <AnimatedContent>
        <main className="w-full h-100 flex justify-center items-center flex-wrap bg-neutral-100">
            <a 
            href="https://eservices.zu.edu.jo/tech_regist_gate/Login/loginPage"
            target="_blank"
            className="border-2 border-orange-400 rounded-xl flex justify-center items-center p-2 w-40 h-40 shadow-md
            hover:scale-102 hover:shadow-2xl transition-all m-5 bg-white cursor-pointer hover:border-3
            ">
                <p className="
                text-md font-semibold"
                >Student Portal</p>
            </a>
            <a 
            href="https://eservices.zu.edu.jo/tech_emp/"
            target="_blank"
            className="border-2 border-orange-400 rounded-xl flex justify-center items-center p-2 w-40 h-40 shadow-md
            hover:scale-102 hover:shadow-2xl transition-all m-5 bg-white cursor-pointer hover:border-3">
                <p className="text-md font-semibold"
                >Employee Portal</p>
            </a>
            <div></div>
        </main>
        </AnimatedContent>
        <Footer />
        </>
    )
}
export default Portals
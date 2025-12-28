import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CircularGallery from "@/components/CircularGallery";
import { useEffect } from "react";


export default function Gallery() {
    useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <>
            <NavBar />
            <div className="w-full h-screen bg-neutral-100">
                <CircularGallery
                bend={2}
                scrollEase={0.09}
                />
            </div>
            <Footer />
        </>
    )
}
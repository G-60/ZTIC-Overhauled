import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";

interface guidePlanProps {
    title: string,
    guideplanimg: string

}
export default function Gplan( {title, guideplanimg}: guidePlanProps) {
    // download guide plan into user's device
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = guideplanimg;
    link.download = "cybersecurity guide plan.png";
    link.click();
  };

    return (
        <>
            <NavBar />
            <Title name={title} />
            <Dnav 
            about="/Departments/Cybersecurity/About"
            members="/Departments/Cybersecurity/Members"
            gplan="/Departments/Cybersecurity/Guide-Plan"
            />
            <main className="w-full h-fit flex py-10 justify-center bg-neutral-100">
                <button type="button" onClick={handleDownload}
                className="cursor-pointer text-2xl border-b-2 border-blue-600 text-blue-600 
                hover:border-orange-400 hover:text-orange-400 transition-all"
                >Download Plan</button>
            </main>
            <Footer />
        </>
    )
}
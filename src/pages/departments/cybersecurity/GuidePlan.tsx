import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import guidep from "@/assets/images/departmentimgs/guide_plans/cybersecurity.png"
export default function Gplan() {
    return (
        <>
            <NavBar />
            <Title name="Cybersecurity Guide Plan" />
            <Dnav 
            about="/Departments/Cybersecurity/About"
            members="/Departments/Cybersecurity/Members"
            gplan="/Departments/Cybersecurity/Guide-Plan"
            />
            <main className="w-full h-fit flex mt-10 mb-10 justify-center bg-neutral-100">
              <img src={guidep} alt="cybersecurity guide plan"
              className="w-200 h-200"
              />
            </main>
            <Footer />
        </>
    )
}
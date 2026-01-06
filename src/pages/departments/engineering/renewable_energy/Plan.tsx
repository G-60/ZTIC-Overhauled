import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/renewable_energy_technology.pdf"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Renewable Energy Technology Study Plan" />
            <Dnav
            about="/departments/engineering/renewable-energy-technology/about"
            members="/departments/engineering/renewable-energy-technology/members"
            plan="/departments/engineering/renewable-energy-technology/plan"
            />
            <MajorDescriptionDownloader
            descpdf={plan} />
            <Footer />
        </>
    )
}
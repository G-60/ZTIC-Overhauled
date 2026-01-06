import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/electric_hybrid.pdf"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Electric & Hybrid Vehicle Maintenance Study Plan" />
            <Dnav
            about="/departments/engineering/electric-and-hybrid-vehicle-maintenance/about"
            members="/departments/engineering/electric-and-hybrid-vehicle-maintenance/members"
            plan="/departments/engineering/electric-and-hybrid-vehicle-maintenance/plan"
            />
            <MajorDescriptionDownloader
            descpdf={plan} />
            <Footer />
        </>
    )
}
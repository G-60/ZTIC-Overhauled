import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/electric_hybrid.pdf"
import AnimatedContent from "@/components/AnimatedContent";

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
            <AnimatedContent>
                <MajorDescriptionDownloader
                descpdf={plan} />
            </AnimatedContent>
            <Footer />
        </>
    )
}
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/ai.pdf"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="AI & Robotics Engineering Study Plan" />
            <Dnav
            about="/departments/it/ai/about"
            members="/departments/it/ai/members"
            plan="/departments/it/ai/plan" />
            <MajorDescriptionDownloader
            descpdf={plan} />
            <Footer />
        </>
    )
}
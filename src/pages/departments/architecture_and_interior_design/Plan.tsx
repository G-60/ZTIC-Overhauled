import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/architecture.pdf"
import AnimatedContent from "@/components/AnimatedContent";
export default function Plan() {
    return (
        <>
            <NavBar />
            <Title 
            name="Architecture & Interior Design Study Plan" />
            <Dnav
            about="/departments/architecture-and-interior-design/about"
            members="/departments/architecture-and-interior-design/members"
            plan="/departments/architecture-and-interior-design/plan"
            />
            <AnimatedContent>
                <MajorDescriptionDownloader 
                descpdf={plan}
                />
            </AnimatedContent>
            <Footer />
        </>
    )
}
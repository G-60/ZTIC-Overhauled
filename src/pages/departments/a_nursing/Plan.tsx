import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Dnav from "@/components/DepNavbar"
import MajorDescriptionDownloader from "@/components/MajorDescDownloader"
import plan from "@/assets/pdfs/detailed_description/a_nursing.pdf"
import AnimatedContent from "@/components/AnimatedContent"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Associate Nursing Study Plan" />
            <Dnav
            about="/departments/associate-nursing/about"
            members="/departments/associate-nursing/members"
            plan="/departments/associate-nursing/plan" />
            <AnimatedContent>
                <MajorDescriptionDownloader
                descpdf={plan} />
            </AnimatedContent>
            <Footer />
        </>
    )
}
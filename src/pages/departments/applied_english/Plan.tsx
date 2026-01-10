import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/applied_english.pdf"
import AnimatedContent from "@/components/AnimatedContent";

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Applied English Study Plan" />
            <Dnav
            about="/departments/applied-english/about"
            members="/departments/applied-english/members"
            plan="/departments/applied-english/plan"
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
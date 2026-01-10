import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/cybersecurity.pdf"
import AnimatedContent from "@/components/AnimatedContent";
export default function Plan() {
    return (
        <>
            <NavBar />
            <Title 
            name="Cybersecurity Study Plan" />
            <Dnav
            about="/departments/it/cybersecurity/about"
            members="/departments/it/cybersecurity/members"
            plan="/departments/it/cybersecurity/plan" />
            <AnimatedContent>
                <MajorDescriptionDownloader 
                descpdf={plan}
                />
            </AnimatedContent>
            <Footer />
        </>
    )
}
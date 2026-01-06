import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/cybersecurity.pdf"
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
            <MajorDescriptionDownloader 
            descpdf={plan}
            />
            <Footer />
        </>
    )
}
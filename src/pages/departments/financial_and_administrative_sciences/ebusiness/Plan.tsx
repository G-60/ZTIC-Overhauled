import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/ebusiness.pdf"
import AnimatedContent from "@/components/AnimatedContent";

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title 
            name="E-Business Management Study Plan" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/ebusiness/about"
            members="/departments/financial-and-administrative-sciences/ebusiness/members"
            plan="/departments/financial-and-administrative-sciences/ebusiness/plan" />
            <AnimatedContent>
                <MajorDescriptionDownloader
                descpdf={plan} />
            </AnimatedContent>
            <Footer />
        </>
    )
}
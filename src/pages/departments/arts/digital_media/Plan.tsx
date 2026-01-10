import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Dnav from "@/components/DepNavbar";
import Title from "@/components/Title";
import MajorDescription from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/digital_multimedia.pdf"
import AnimatedContent from "@/components/AnimatedContent";

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Digital Media Study Plan" />
            <Dnav 
            about="/departments/applied-arts/digital-media/about"
            members="/departments/applied-arts/digital-media/members"
            plan="/departments/applied-arts/digital-media/plan"
            />
            <AnimatedContent>
                <MajorDescription
                descpdf={plan}
                />
            </AnimatedContent>
            <Footer />
        </>
    )
}
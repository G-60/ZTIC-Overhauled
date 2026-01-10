import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Dnav from "@/components/DepNavbar";
import Title from "@/components/Title";
import MajorDescription from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/animation.pdf"
import AnimatedContent from "@/components/AnimatedContent";

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Animation Arts Study Plan" />
            <Dnav 
            about="/departments/applied-arts/animation-arts/about"
            members="/departments/applied-arts/animation-arts/members"
            plan="/departments/applied-arts/animation-arts/plan"
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
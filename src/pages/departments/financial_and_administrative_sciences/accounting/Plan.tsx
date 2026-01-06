import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/accounting.pdf"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title
            name="Technical Accounting Study Plan" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/accounting/about"
            members="/departments/financial-and-administrative-sciences/accounting/members"
            plan="/departments/financial-and-administrative-sciences/accounting/plan" />
            <MajorDescriptionDownloader
            descpdf={plan} />
            <Footer />
        </>
    )
}
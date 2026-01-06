import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import MajorDescriptionDownloader from "@/components/MajorDescDownloader";
import plan from "@/assets/pdfs/detailed_description/tax_and_customs_sciences.pdf"

export default function Plan() {
    return (
        <>
            <NavBar />
            <Title 
            name="Tax & Customs Sciences Study Plan" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/about"
            members="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/members"
            plan="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/plan" />
            <MajorDescriptionDownloader
            descpdf={plan} />
            <Footer />
        </>
    )
}
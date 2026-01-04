import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import GplanDownloader from "@/components/GuidePlanDownloader";

import gimg from "@/assets/images/departmentimgs/guide_plans/cybersecurity.png"
export default function Gplan() {
    return (
        <>
            <NavBar />
            <Title 
            name="Cybersecurity Guide Plan" />
            <Dnav
            about="/departments/it/cybersecurity/about"
            members="/departments/it/cybersecurity/members"
            gplan="/departments/it/cybersecurity/guide-plan" />
            <GplanDownloader 
            gimg={gimg}
            />
            <Footer />
        </>
    )
}
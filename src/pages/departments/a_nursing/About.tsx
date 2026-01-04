import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";

export default function About() {
    return (
        <>
            <NavBar />
            <main className="w-full h-fit bg-neutral-100">
            <Title
            name="Associate Nursing" />
            <Dnav
            about="/departments/associate-nursing/about"
            members="/departments/associate-nursing/members"
            gplan="/departments/associate-nursing/guide-plan" />
            <h1
                className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                >About the Specialization</h1>
                <p className="px-10 pb-5 mt-5">
                    The Associate Nursing Specialization is one of the specializations of the Intermediate Diploma in Health Sciences, and aims to prepare scientifically and practically qualified nursing personnel to provide basic nursing care to patients under the supervision of a legal nurse and a physician.
                    This specialization focuses on providing students with the knowledge and skills necessary to care for patients in various health facilities such as hospitals, health centers, and clinics.
                    <br /><br />
                    The program includes the study of theoretical and practical subjects in the basics of nursing, internal and surgical nursing, child health nursing, maternity nursing, ambulance and emergency, in addition to intensive clinical training.
                    An associate nursing graduate is an essential component of the health team, contributing to providing direct care to patients, following up on vital signs, administering medications, and assisting with various medical and nursing procedures.
                </p>
            </main>
            <Footer />
        </>
    )
}
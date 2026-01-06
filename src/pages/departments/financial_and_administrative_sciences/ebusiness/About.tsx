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
                name="E-Business Management" />
                <Dnav
                about="/departments/financial-and-administrative-sciences/ebusiness/about"
                members="/departments/financial-and-administrative-sciences/ebusiness/members"
                plan="/departments/financial-and-administrative-sciences/ebusiness/plan" />
                <div>
                <h1
                className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                >About the Specialization</h1>
                <p className="px-10 pb-5 mt-5">
                    It aims to prepare qualified technical cadres to work in various administrative
                    fields, such as managing complete electronic services of all kinds known as e-services,
                    e-publishing, electronic content management, digital content formulation, websites, blogs,
                    electronic buying and selling operations,
                    e-marketing, and e-management of human resources and follow up on inventory operations 
                    and the delivery and receipt of goods electronically at government institutions and private companies 
                    in all their industrial, financial, and service fields.
                </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
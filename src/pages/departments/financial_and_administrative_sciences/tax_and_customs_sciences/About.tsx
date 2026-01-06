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
                name="Tax & Customs Sciences" />
                <Dnav
                about="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/about"
                members="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/members"
                plan="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/plan" />
                <div>
                <h1
                className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                >About the Specialization</h1>
                <p className="px-10 pb-5 mt-5">
                    Tax and Customs Sciences is an academic and professional field focusing on the laws, 
                    administration, and economic impacts of taxation (income, sales) and customs duties (border taxes), 
                    covering areas like international trade law, digital systems, compliance, risk analysis, and policy.</p>
                </div>
            </main>
            <Footer />
        </>
    )
}
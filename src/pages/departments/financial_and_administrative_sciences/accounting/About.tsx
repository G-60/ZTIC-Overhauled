import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";

export default function About() {
    return (
        <>
            <NavBar />
            <main className="bg-neutral-100">
                <Title
                name="Technical Accounting"/>
                <Dnav
                about="/departments/financial-and-administrative-sciences/accounting/about"
                members="/departments/financial-and-administrative-sciences/accounting/members"
                plan="/departments/financial-and-administrative-sciences/accounting/plan" />
                <div>
                    <h1
                    className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                    >About the Specialization</h1>
                    <p className="px-10 pb-5 mt-5">
                        It aims to prepare qualified technical cadres to work in the fields of collection and receivables, 
                        carry out feasibility studies, tax examinations, salaries, cost accounts, 
                        and prepare financial statements for government institutions and ministries, 
                        private financial institutions, industrial and service institutions, 
                        banking institutions, accounting and auditing offices, financial management institutions, 
                        and insurance companies. The program aims to prepare accounting cadres proficient 
                        in using technology and technical application to be qualified to work in tax, schools and institutes.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import AnimatedContent from "@/components/AnimatedContent";

export default function About() {
    return (
        <>
            <NavBar />
            <main className="w-full h-fit bg-neutral-100">
                <Title name="Electric & Hybrid Maintenance" />
                <Dnav
                about="/departments/engineering/electric-and-hybrid-vehicle-maintenance/about"
                members="/departments/engineering/electric-and-hybrid-vehicle-maintenance/members"
                plan="/departments/engineering/electric-and-hybrid-vehicle-maintenance/plan"
                />
                <AnimatedContent>
                    <div>
                        <h1
                        className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                        >About the Specialization</h1>
                        <p className="px-10 pb-5 mt-5">
                            The hybrid and electric vehicle maintenance department is of great importance
                            in light of rapid technological development and the increasing need for it in various fields,
                            making it the focus of attention of several engineering specializations. This specialty aims to analyze,
                            design and maintain mechanical, electrical and electronic systems in vehicles. The Department of Electric
                                and Hybrid Vehicle Maintenance was established at Zarqa Intermediate Technical College in 2018, 
                                with the aim of qualifying technicians specialized in this vital field. The department offers diplomas 
                                in electric and hybrid vehicle maintenance and has a distinguished faculty of master's degree holders, 
                                as well as engineers with engineering experience. Students receive practical and theoretical training to 
                                develop their skills in electric and hybrid vehicle maintenance.<br /><br />
                                The program aims to prepare qualified, self-certified automotive technicians capable of diagnosing, maintaining, and repairing mechanical,
                                electrical, and electronic problems in hybrid and electric vehicles,
                                as well as internal combustion engines, using the latest technologies. 
                                This program complies with Level 6 of the National Qualifications Framework.
                        </p>
                    </div>
                </AnimatedContent>
            </main>
            <Footer />
        </>
    )
}
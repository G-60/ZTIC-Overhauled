import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import AnimatedContent from "@/components/AnimatedContent";

export default function About() {
    return (
        <>
            <NavBar />
            <Title
            name="Architecture & Interior Design"/>
            <Dnav
            about="/departments/architecture-and-interior-design/about"
            members="/departments/architecture-and-interior-design/members"
            plan="/departments/architecture-and-interior-design/plan"
            />
            <AnimatedContent>
                <div className="bg-neutral-100 pt-10">
                    <h1
                        className="p-3 border-l-2 border-orange-400 text-2xl ml-10"
                        >About the Specialization</h1>
                    <p className="px-10 pb-5 mt-5">
                        The Architecture and Interior Design major was established at Zarqa Technical Intermediate College at the beginning 
                        of the first semester of the academic year 2021/2022, the architectural engineering major 
                        affiliated with the Architectural, 
                        Civil and Environmental Engineering Technology program in public and private colleges is one of 
                        the leading and in-demand majors in the local, regional, and global labor market.
                        In this major, we seek to provide qualitative technical vocational education to students to graduate distinguished and 
                        effective students in the design process alongside engineers and specialists in the field of architecture and interior design, 
                        where the graduating student is familiar with all aspects of architectural engineering in addition to being familiar with all aspects and techniques of interior design. 
                        The structural aspect, building materials technology, the functional and aesthetic aspect, the mechanical and electrical aspect, in addition to many programs that help him with this. This ensures the success and distinction of graduates in practicing the profession, 
                        in addition to qualifying them to complete their studies in the bachelor’s program in 
                        public and private universities.
                        </p>
                </div>
            </AnimatedContent>
            <Footer />
        </>
    )
}
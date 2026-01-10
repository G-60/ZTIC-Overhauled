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
            name="Applied English"/>
            <Dnav
            about="/departments/applied-english/about"
            members="/departments/applied-english/members"
            plan="/departments/applied-english/plan"
            />
            <AnimatedContent>
                <div className="bg-neutral-100 pt-10">
                <h1
                    className="p-3 border-l-2 border-orange-400 text-2xl ml-10"
                    >About the Specialization</h1>
                    <p className="px-10 pb-5 mt-5">The program aims to prepare translators and text analysts in various fields, such as business, tourism, marketing, technical and legal fields, journalism, and media.</p>
                </div>
            </AnimatedContent>
            <Footer />
        </>
    )
}
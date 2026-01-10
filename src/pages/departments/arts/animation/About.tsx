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
                <Title
                name="Animation Arts" />
                <Dnav
                about="/departments/applied-arts/animation-arts/about"
                members="/departments/applied-arts/animation-arts/members"
                plan="/departments/applied-arts/animation-arts/plan" />
                <AnimatedContent>
                    <div>
                        <h1
                        className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                        >About the Specialization</h1>
                        <p className="px-10 pb-5 mt-5"> 
                        Animation Arts is a creative field that combines art and technology to produce moving images used in films, 
                        television, electronic games, and advertisements. This major focuses on developing students' 
                        skills in drawing and design, in addition to using modern software and technologies.
                        </p>
                    </div>
                </AnimatedContent>
            </main>
            <Footer />
        </>
    )
}
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
                name="AI & Robotics Engineering" />
                <Dnav
                about="/departments/it/ai/about"
                members="/departments/it/ai/members"
                plan="/departments/it/ai/plan" />
                <div>
                    <h1
                    className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                    >About the Specialization</h1>
                    <p className="px-10 pb-5 mt-5">
                        The Artificial Intelligence and Robotics Engineering major focuses on artificial intelligence,
                        which is one of the modern majors in the field of computer engineering and information technology. 
                        Artificial intelligence investigates advanced programming methods to perform tasks or reach conclusions similar to those performed by humans. 
                        The major is based on understanding mental processes and learning methods and then translating them into equivalent computer processes that increase the computer's 
                        ability to solve complex problems and employ these processes in designing, building and operating robots.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
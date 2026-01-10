import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import AnimatedContent from "@/components/AnimatedContent";
export default function about() {
    return (
        <>
            <NavBar />
            <main className="bg-neutral-100">
            <Title
            name="Digital Media"/>
            <Dnav
            about="/departments/applied-arts/digital-media/about"
            members="/departments/applied-arts/digital-media/members"
            plan="/departments/applied-arts/digital-media/plan"
            />
            <AnimatedContent>
                <h1
                    className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                    >About the Specialization</h1>
                    <p className="px-10 pb-5 mt-5">
                        The Digital Media major is an innovative field of study that combines digital media skills, graphic design, and film production, giving students an integrated set of skills and knowledge in the modern media industry. The specialization requires the completion of 72 hours of study, during which the focus is on developing practical and theoretical competencies in several key aspects.
                        <br />
                        In this major, students learn how to use graphic design software such as <b>Photoshop</b>, <b>Illustrator</b>, and <b>InDesign</b> to design and edit images and graphics. In addition, they learn how to edit and produce video using software such as <b>Premiere</b> and <b>After Effects</b>.<br /><br />
                        The curriculum also includes courses in news writing and editing, providing students with the journalistic editing skills needed to work in media organizations. They also learn different photography techniques, which enable them to take high-quality photos and videos that are used in media production.
                        During the study period, students work on practical projects that simulate real work environments, giving them the opportunity to apply the skills they have learned in real-life contexts. Graduates of this major graduate equipped with the creative and technical skills that qualify them to work in a variety of fields such as digital journalism, e-marketing, graphic design, film production, and visual media.
                    </p>
                </AnimatedContent>
            </main>
            <Footer />
        </>
    )
}
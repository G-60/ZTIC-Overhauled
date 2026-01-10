import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";
// imgs
import marah from "@/assets/images/departmentimgs/depmembers/a_nursing/marah.jpeg"
import rama from "@/assets/images/departmentimgs/depmembers/a_nursing/rama.jpeg"
import AnimatedContent from "@/components/AnimatedContent";
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Associate Nursing Members" />
            <Dnav
            about="/departments/associate-nursing/about"
            members="/departments/associate-nursing/members"
            plan="/departments/associate-nursing/plan" />
            <AnimatedContent>
                <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Marah Dababseh"
                        role="Department Head"
                        officeNo="S125"
                        edu="Masters"
                        img={marah}
                        linkedin="https://www.linkedin.com/in/marah-dababseh-127656295/"
                        email="mdababseh@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Aram Ankeh"
                    role="Assistant"
                    officeNo="T62"
                    edu="Bachelors"
                    img={rama}
                    linkedin=""
                    email="aankeh@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Rama Alhaji"
                    role="Assistant"
                    officeNo=""
                    edu="Bachelors"
                    img={rama}
                    linkedin=""
                    email="ralhaji@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer />
        </>
    )
}
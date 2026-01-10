import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";

// imgs
import iyaad from "@/assets/images/departmentimgs/depmembers/english/iyaad.png"
import kareem from "@/assets/images/departmentimgs/depmembers/english/kareem.jpg"
import lotfi from "@/assets/images/departmentimgs/depmembers/english/lotfi.png"
import diaa from "@/assets/images/departmentimgs/depmembers/english/diaa.png"
import razan from "@/assets/images/departmentimgs/depmembers/english/razan.png"
import AnimatedContent from "@/components/AnimatedContent";

export default function members() {
    return (
        <>
            <NavBar />
            <Title
            name="Applied English Members" />
            <Dnav
            about="/departments/applied-english/about"
            members="/departments/applied-english/members"
            plan="/departments/applied-english/plan"
            />
            <AnimatedContent>
                <main className="
                grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100 px-5   ">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Iyad Azzeidieen"
                        img={iyaad}
                        role="Department Head"
                        edu="PhD"
                        officeNo="T69"
                        linkedin=""
                        email="iazzeidieen@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Kareem Sweileh"
                    img={kareem}
                    role="Lecturer"
                    edu="Masters"
                    officeNo="T64"
                    linkedin="https://www.linkedin.com/in/kareem-sweileh-2b757a88/"
                    email="ksweileh@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Diaa Smadi"
                    img={diaa}
                    role="Assistant"
                    edu="Bachelors"
                    officeNo="T24"
                    linkedin=""
                    email="dsmadi@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Lotfi Al Saadi"
                    img={lotfi}
                    role="Assistant"
                    edu="Bachelors"
                    officeNo="T64"
                    linkedin="https://www.linkedin.com/in/lotfi-al-saadi-6b8648210/"
                    email="lalsaadi@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Razan Daoud"
                    img={razan}
                    role="Assistant"
                    edu="Bachelors"
                    officeNo="T26"
                    linkedin="https://www.linkedin.com/in/razan-daoud-304a821ab/"
                    email="rdaoud@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer />
        </>
    )
}
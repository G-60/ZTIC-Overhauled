import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Dnav from "@/components/DepNavbar";
import Title from "@/components/Title";
import Pcard from "@/components/ProfileCard";

// imgs
import omarta from "@/assets/images/departmentimgs/depmembers/cyber/omartam.jpeg"
import sajida from "@/assets/images/departmentimgs/depmembers/ai/sajida.jpg"
import moalq from "@/assets/images/departmentimgs/depmembers/ai/moalq.jpeg"
import murad from "@/assets/images/departmentimgs/depmembers/ai/murad.jpg"
import AnimatedContent from "@/components/AnimatedContent";
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="AI & Robotics Engineering Members" />
            <Dnav
            about="/departments/it/ai/about"
            members="/departments/it/ai/members"
            plan="/departments/it/ai/plan" />
            <AnimatedContent>
                <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Omar Tamimi"
                        role="Department Head"
                        officeNo="S126"
                        edu="Masters"
                        img={omarta}
                        linkedin="https://www.linkedin.com/in/omar-ahmad-3087b2220/"
                        email="oaltamimi@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Sajeda Alnwairan"
                    role="Lecturer"
                    officeNo="S17"
                    edu="Masters"
                    img={sajida}
                    linkedin=""
                    email="salnwairan@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Shrouq Ibrahim"
                    role="Lecturer"
                    officeNo="T62"
                    edu="Masters"
                    img={sajida}
                    linkedin=""
                    email="shibrahim@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Morad Al-Khamaiseh"
                    role="Assistant"
                    officeNo="Z9"
                    edu="Bachelors"
                    img={murad}
                    linkedin=""
                    email="malkhamaiseh@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Omar Barqawi"
                    role="Assistant"
                    officeNo="Z10"
                    edu="Bachelors"
                    img={murad}
                    linkedin="https://www.linkedin.com/in/omarbarqawii/"
                    email="obarqawi@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Mohammed Alquthah"
                    role="Assistant"
                    officeNo="T64"
                    edu="Bachelors"
                    img={moalq}
                    linkedin=""
                    email="malquthah@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Abdallah Shawish"
                    role="Assistant"
                    officeNo="S128"
                    edu="Bachelors"
                    img={moalq}
                    linkedin="https://www.linkedin.com/in/abdallah-shawish-634957256/"
                    email="ashawish@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer />
        </>
    )
}
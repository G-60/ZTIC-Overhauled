import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Dnav from "@/components/DepNavbar"
import Pcard from "@/components/ProfileCard"
// imgs
import ahmadalz from "@/assets/images/departmentimgs/depmembers/digital-media/ahmad_alzubi.jpg"
import zaid from "@/assets/images/departmentimgs/depmembers/animation_arts/zaid.jpeg"
import AnimatedContent from "@/components/AnimatedContent"
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Animation Arts Members" />
            <Dnav
            about="/departments/applied-arts/animation-arts/about"
            members="/departments/applied-arts/animation-arts/members"
            plan="/departments/applied-arts/animation-arts/plan" />
            <AnimatedContent>
                <main className="
                grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Ahmad Alzubi"
                        role="Department Head"
                        officeNo="T66"
                        edu="Masters"
                        img={ahmadalz}
                        linkedin="https://www.linkedin.com/in/ahmad-alzubi-b93a52185/"
                        email="aalzubi@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Zaid Almomani"
                    role="Lecturer"
                    officeNo="S102"
                    edu="Masters"
                    img={zaid}
                    linkedin="https://www.linkedin.com/in/zaid-almomani-02a329349/"
                    email="zalmomani@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Roaa Mousa"
                    role="Assistant"
                    officeNo="T61"
                    edu="Bachelors"
                    img={zaid}
                    linkedin=""
                    email="rmousa@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer /> 
        </>
    )
}
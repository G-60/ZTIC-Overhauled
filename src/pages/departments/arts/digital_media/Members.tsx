import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Pcard from "@/components/ProfileCard";
import Dnav from "@/components/DepNavbar";
// imgs
import AhmadAlzubi from "@/assets/images/departmentimgs/depmembers/digital-media/ahmad_alzubi.jpg"
import ahmadalshirah from "@/assets/images/departmentimgs/depmembers/digital-media/ahmad_alshirah.jpg"
import AhmadAlqudah from "@/assets/images/departmentimgs/depmembers/digital-media/ahmad_alqudah.jpg"
import motasem from "@/assets/images/departmentimgs/depmembers/digital-media/motasem_aldaour.jpg"
import yousef from "@/assets/images/departmentimgs/depmembers/digital-media/yousef_alamir.jpeg"
import AnimatedContent from "@/components/AnimatedContent";

export default function members() {
    return (
        <>
            <NavBar />
            <Title
            name="Digital Media Members" />
            <Dnav
            about="/departments/applied-arts/digital-media/about"
            members="/departments/applied-arts/digital-media/members"
            plan="/departments/applied-arts/digital-media/plan"
            />
            <AnimatedContent>
                <main className="
                grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Ahmad Alzubi"
                        img={AhmadAlzubi}
                        role="Department Head"
                        officeNo="T66"
                        edu="Masters"
                        linkedin="https://www.linkedin.com/in/ahmad-alzubi-b93a52185/"
                        email="aalzubi@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Ahmad Alshirah"
                    img={ahmadalshirah}
                    role="Lecturer"
                    officeNo="T67"
                    edu="Masters"
                    linkedin=""
                    email="aalshraah@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Ahmad Alqudah"
                    img={AhmadAlqudah}
                    role="Lecturer"
                    officeNo="T66"
                    edu="Masters"
                    linkedin=""
                    email="aalqudah@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Sadeq Abdel Rahman"
                    img={AhmadAlqudah}
                    role="Assistant"
                    officeNo="T25"
                    edu="Bachelors"
                    linkedin="https://www.linkedin.com/in/sadeq-abdel-rahman-10437a22b/"
                    email="sabdelrahman@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Yousef Alamir"
                    img={yousef}
                    role="Assistant"
                    officeNo="S205"
                    edu="Bachelors"
                    linkedin=""
                    email="yalamir@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Motasem Al Daour"
                    img={motasem}
                    role="Assistant"
                    officeNo="T73"
                    edu="Bachelors"
                    linkedin=""
                    email="maldaour@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Amal Al Tous"
                    img={AhmadAlqudah}
                    role="Assistant"
                    officeNo="T75"
                    edu="Bachelors"
                    linkedin=""
                    email="aaltous@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Bayan Albakheet"
                    img={ahmadalshirah}
                    role="Assistant"
                    officeNo="T61"
                    edu="Bachelors"
                    linkedin=""
                    email="baalbakheet@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer />
        </>
    )
}
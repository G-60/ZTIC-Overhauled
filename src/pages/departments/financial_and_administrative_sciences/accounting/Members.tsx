import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";
// imgs
import moalhaj from "@/assets/images/departmentimgs/depmembers/accounting/mohammad_alhaj.png"
import hassan from "@/assets/images/departmentimgs/depmembers/accounting/hasan_al_enabi.png"
import motaiser from "@/assets/images/departmentimgs/depmembers/accounting/mohammad_taisir.jpg"
import issa from "@/assets/images/departmentimgs/depmembers/accounting/issa.jpg"
import wafaa from "@/assets/images/departmentimgs/depmembers/accounting/waffa.jpeg"
import AnimatedContent from "@/components/AnimatedContent";
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Technical Accounting Members" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/accounting/about"
            members="/departments/financial-and-administrative-sciences/accounting/members"
            plan="/departments/financial-and-administrative-sciences/accounting/plan" />
            <AnimatedContent>
                <main className="
                grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
                w-full h-fit py-5 bg-neutral-100">
                    <div className="col-span-full">
                        <Pcard
                        name="Dr. Mohammad Alhaj"
                        role="Department Head"
                        officeNo="T74"
                        edu="Masters"
                        img={moalhaj}
                        linkedin=""
                        email="malhaj@ztic.edu.jo"
                        />
                    </div>
                    <Pcard
                    name="Dr. Hassan Al-Anabi"
                    role="Lecturer | Vice Dean" 
                    officeNo="T81"
                    edu="Masters"
                    img={hassan}
                    linkedin="https://www.linkedin.com/in/hasan-alenabi-469a411b1/"
                    email="halenabi@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Mohammad Suleiman"
                    role="Lecturer"
                    officeNo="T72"
                    edu="Masters"
                    img={motaiser}
                    linkedin=""
                    email="msuliman@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Issa Shalan"
                    role="Assistant"
                    officeNo="T73"
                    edu="Bachelors"
                    img={issa}
                    linkedin="https://www.linkedin.com/in/issa-shalan-643857287/"
                    email="ishalan@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Wafaa Al-Zgoul"
                    role="Assistant"
                    officeNo="T62"
                    edu="Bachelors"
                    img={wafaa}
                    linkedin=""
                    email="walzgooul@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Aya Abdelnabi"
                    role="Assistant"
                    officeNo="T62"
                    edu="Bachelors"
                    img={wafaa}
                    linkedin=""
                    email="aabdalnabi@ztic.edu.jo"
                    />
                </main>
            </AnimatedContent>
            <Footer />
        </>
    )
}
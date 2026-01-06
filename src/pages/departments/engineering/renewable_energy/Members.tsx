import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Dnav from "@/components/DepNavbar";
import Title from "@/components/Title";
import Pcard from "@/components/ProfileCard";
// imgs
import kholoud from "@/assets/images/departmentimgs/depmembers/electric_hybrid/khlood.jpg"
import aseel from "@/assets/images/departmentimgs/depmembers/renewable_energy/aseel.jpg"
import mansoor from "@/assets/images/departmentimgs/depmembers/renewable_energy/mansoor.png"
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Renewable Energy Technology Members" />
            <Dnav
            about="/departments/engineering/renewable-energy-technology/about"
            members="/departments/engineering/renewable-energy-technology/members"
            plan="/departments/engineering/renewable-energy-technology/plan"
            />
            <main className="
            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
            w-full h-fit py-5 bg-neutral-100">
                <div className="col-span-full">
                    <Pcard
                    name="Dr. Kholoud Bani Salameh"
                    role="Department Head"
                    officeNo="S23"
                    edu="Masters"
                    img={kholoud}
                    linkedin="https://www.linkedin.com/in/kholoud-banisalameh/"
                    email="kbanisalameh@ztic.edu.jo"
                    />
                </div>
                <Pcard
                name="Dr. Aseel Al-Zaidaneen"
                role="Teacher"
                officeNo="S24"
                edu="Masters"
                img={aseel}
                linkedin=""
                email="aalzaidaneen@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Raneem Alrishoud"
                role="Teacher"
                officeNo="S24"
                edu="Masters"
                img={aseel}
                linkedin=""
                email="ralrishoud@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mansour Saidan"
                role="Assistant"
                officeNo="S20"
                edu="Bachelors"
                img={mansoor}
                linkedin=""
                email="msaidan@ztic.edu.jo"
                />
            </main>
            <Footer />
        </>
    )
}
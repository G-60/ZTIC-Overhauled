import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";

// imgs
import kholoud from "@/assets/images/departmentimgs/depmembers/electric_hybrid/khlood.jpg"
import sra from "@/assets/images/departmentimgs/depmembers/electric_hybrid/sra.jpg"
import orwa from "@/assets/images/departmentimgs/depmembers/electric_hybrid/arowa.png"
import mahmood from "@/assets/images/departmentimgs/depmembers/electric_hybrid/mahmood.png"
import motaz from "@/assets/images/departmentimgs/depmembers/electric_hybrid/motaz.jpeg"
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Electric & Hybrid Vehicle Maintenance Members" />
            <Dnav
            about="/departments/engineering/electric-and-hybrid-vehicle-maintenance/about"
            members="/departments/engineering/electric-and-hybrid-vehicle-maintenance/members"
            plan="/departments/engineering/electric-and-hybrid-vehicle-maintenance/plan"
            />
            <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
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
                name="Dr. Sara Abu Dabaseh"
                role="Teacher"
                officeNo="S24"
                edu="Masters"
                img={sra}
                linkedin=""
                email="sabuabaseh@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mohammed Alirshedat"
                role="Assistant"
                officeNo="S22"
                edu="Bachelors"
                img={sra}
                linkedin="https://www.linkedin.com/in/mohammed-alirshedat-0675a7209/"
                email="malirshedat@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Orwa Rawashdeh"
                role="Assistant"
                officeNo="S18"
                edu="Bachelors"
                img={orwa}
                linkedin="https://www.linkedin.com/in/orwa-rawashdeh-778044287/"
                email="orawashdeh@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Abdalluh Turky"
                role="Assistant"
                officeNo="Z1"
                edu="Bachelors"
                img={orwa}
                linkedin=""
                email="aturky@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mahmoud Al-Hajar"
                role="Assistant"
                officeNo="Z3"
                edu="Bachelors"
                img={mahmood}
                linkedin=""
                email="malhajar@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mutaz Al-Jboor"
                role="Assistant"
                officeNo="Z1"
                edu="Bachelors"
                img={motaz}
                linkedin=""
                email="mjboor@ztic.edu.jo"
                />
            </main>
            <Footer />
        </>
    )
}
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";
// imgs
import moalhaj from "@/assets/images/departmentimgs/depmembers/accounting/mohammad_alhaj.png"
import saleh from "@/assets/images/departmentimgs/depmembers/tax_and_customs_sciences/saleh.jpeg"
import amal from "@/assets/images/departmentimgs/depmembers/tax_and_customs_sciences/amal.png"
import moaljrah from "@/assets/images/departmentimgs/depmembers/tax_and_customs_sciences/moaljrah.png"
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="Tax & Customs Sciences Members" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/tax-and-customs/about"
            members="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/members"
            plan="/departments/financial-and-administrative-sciences/tax-and-customs-sciences/plan" />
            <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
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
                name="Dr. Saleh Al-Zorqan"
                role="Associate Lecturer"
                officeNo="S127"
                edu="PhD"
                img={saleh}
                linkedin=""
                email="salzorqan@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Amal Aburahmeh"
                role="Lecturer"
                officeNo="T68"
                edu="Masters"
                img={amal}
                linkedin=""
                email="aaburahmah@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mohammad Al-Jarrah"
                role="Assistant"
                officeNo="T63"
                edu="Bachelors"
                img={moaljrah}
                linkedin=""
                email="mjarrah@ztic.edu.jo"
                />
            </main>
            <Footer />
        </>
    )
}
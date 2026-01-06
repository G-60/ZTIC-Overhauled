import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";
import Pcard from "@/components/ProfileCard";
// imgs
import moalhaj from "@/assets/images/departmentimgs/depmembers/accounting/mohammad_alhaj.png"
import moalehjia from "@/assets/images/departmentimgs/depmembers/ebusiness/moalija.png"
import hamza from "@/assets/images/departmentimgs/depmembers/ebusiness/hamza.png"
import nidal from "@/assets/images/departmentimgs/depmembers/ebusiness/nidal.png"
import maysoon from "@/assets/images/departmentimgs/depmembers/ebusiness/maison.jpeg"
import moalhaj2 from "@/assets/images/departmentimgs/depmembers/ebusiness/moalhaj.jpeg" 
export default function Members() {
    return (
        <>
            <NavBar />
            <Title
            name="E-Business Management Members" />
            <Dnav
            about="/departments/financial-and-administrative-sciences/ebusiness/about"
            members="/departments/financial-and-administrative-sciences/ebusiness/members"
            plan="/departments/financial-and-administrative-sciences/ebusiness/plan" />
            <main className="
             grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
            w-full h-fit py-5 bg-neutral-100">
                <div className="col-span-full">
                <Pcard
                name="Dr. Mohammad Al-Hajj"
                role="Department Head"
                officeNo="T74"
                edu="Masters"
                img={moalhaj}
                linkedin=""
                email="malhaj@ztic.edu.jo"
                />
                </div>
                <Pcard
                name="Dr. Mohammad Abu-Alhijaa"
                role="Lecturer | Head of Service Courses"
                officeNo="S116"
                edu="Masters"
                img={moalehjia}
                linkedin=""
                email="Mabulhaijaa@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Hamza Al-Shoubaki"
                role="Lecturer | Assistant Dean"
                officeNo="S115"
                edu="Masters"
                img={hamza}
                linkedin=""
                email="halshoubaki@zitc.edu.jo"
                />
                <Pcard
                name="Dr. Nedal Qassem"
                role="Assistant"
                officeNo="Z9"
                edu="Bachelors"
                img={nidal}
                linkedin=""
                email="naghaqassim@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Maysoon Al-Salem"
                role="Assistant"
                officeNo="T63"
                edu="Bachelors"
                img={maysoon}
                linkedin=""
                email="malsalm@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Mohammad AlHaj"
                role="Assistant"
                officeNo="T63"
                edu="Bachelors"
                img={moalhaj2}
                linkedin=""
                email="m.alhaj@ztic.edu.jo"
                />
            </main>
            <Footer />
        </>
    )
}
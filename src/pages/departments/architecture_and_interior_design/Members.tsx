import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Dnav from "@/components/DepNavbar"
import Pcard from "@/components/ProfileCard"
// imgs
import heba from "@/assets/images/departmentimgs/depmembers/architecture_and_interior_design/heba.jpeg"
import ferrial from "@/assets/images/departmentimgs/depmembers/architecture_and_interior_design/ferial.jpeg"
export default function Members() {
    return (
        <>
            <NavBar />
            <Title name="Architecture & Interior Design Members" />
            <Dnav
            about="/departments/architecture-and-interior-design/about"
            members="/departments/architecture-and-interior-design/members"
            plan="/departments/architecture-and-interior-design/plan"
            />
            <main className="
            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-5
            w-full h-fit py-5 bg-neutral-100">
                <div className="col-span-full">
                    <Pcard
                    name="Dr. Heba Abu Hmaid"
                    role="Department Head"
                    officeNo="S14"
                    edu="Masters"
                    img={heba}
                    linkedin="https://www.linkedin.com/in/heba-abu-ehmaid-728a36372/"
                    email="habuehmaid@ztic.edu.jo"
                    />
                </div>
                <Pcard
                name="Dr. Ferial Hamdan"
                role="Lecturer"
                officeNo="T70"
                edu="Masters"
                img={ferrial}
                linkedin=""
                email="fhamdan@ztic.edu.jo"
                />
                <Pcard
                name="Dr. Arwa Al-Khalaileh"
                role="Assistant"
                officeNo="T68"
                edu="Bachelors"
                img={ferrial}
                linkedin=""
                email="a.alkhalaileh@ztic.edu.jo"
                />
            </main>
            <Footer />
        </>                
    )
}

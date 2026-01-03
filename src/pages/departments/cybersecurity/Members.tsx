import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Dnav from "@/components/DepNavbar"
import Pcard from "@/components/ProfileCard"
// members imgs
import omar from "@/assets/images/departmentimgs/depmembers/cyber/omartam.jpeg"
import dena from "@/assets/images/departmentimgs/depmembers/cyber/dena_abulila.jpg"
import rabee from "@/assets/images/departmentimgs/depmembers/cyber/rabee.jpeg"
import eman from "@/assets/images/departmentimgs/depmembers/cyber/eman_alhanfi.png"
import mayada from "@/assets/images/departmentimgs/depmembers/cyber/mayada.png"
import ahmadk from "@/assets/images/departmentimgs/depmembers/cyber/ahq.jpeg"
import ahmadq from "@/assets/images/departmentimgs/depmembers/cyber/ahabd.jpeg"
import wsn from "@/assets/images/departmentimgs/depmembers/cyber/wasan.jpeg"

export default function Members() {
    return (
        <>
            <NavBar />
            <Title name="Cybersecurity Members" />
            <Dnav
            about="/departments/cybersecurity/about"
            members="/departments/cybersecurity/members"
            gplan="/departments/cybersecurity/guide-plan"
            />
            <main className="w-full h-fit pb-10 bg-neutral-100">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 gap-y-5 pt-8 mx-10">
                    <div className="col-span-full">
                    <Pcard
                    name="Dr. Omar Tamimi"
                    role="Department Head"
                    officeNo="S126"
                    edu="Master"
                    img={omar}
                    linkedin="https://www.linkedin.com/in/omar-ahmad-3087b2220/"
                    email="oaltamimi@ztic.edu.jo"
                    />
                    </div>
                    <Pcard
                    name="Dr. Dena Abu Laila"
                    role="Teacher"
                    officeNo="S17"
                    edu="Master"
                    img={dena}
                    linkedin="https://www.linkedin.com/in/dena-abulaila-6549aa187/"
                    email="dabulaila@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Rabee Al-Quran"
                    role="Teacher"
                    officeNo="S15"
                    edu="Master"
                    img={rabee}
                    linkedin="" // fill later
                    email="rabeealquran@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Mayyadah Ghatashe"
                    role="Assistant"
                    officeNo="S17"
                    edu="Bachelors"
                    img={mayada}
                    linkedin="" // fill later
                    email="mghatashe@ztic.edu.jo"
                    />
                    <Pcard
                    name="Dr. Eman Alhanafi"
                    role="Assistant"
                    officeNo="T75"
                    edu="Bachelors"
                    img={eman}
                    linkedin="https://www.linkedin.com/in/eman-alhanafi-0b3026278/"
                    email="ealhanafi@ztic.edu.jo"
                    /><Pcard
                    name="Dr. Ahmad Abedalqader"
                    role="Assistant"
                    officeNo="Z10"
                    edu="Bachelors"
                    img={ahmadq}
                    linkedin="https://www.linkedin.com/in/ahmadjabalii/"
                    email="aabedalqader@ztic.edu.jo"
                    /><Pcard
                    name="Dr. Ahmad Alkadi"
                    role="Assistant"
                    officeNo="T63"
                    edu="Bachelors"
                    img={ahmadk}
                    linkedin="https://www.linkedin.com/in/ahmad-alkadi/"
                    email="aalkadi@ztic.edu.jo"
                    /><Pcard
                    name="Dr. Wasan Al-Najar"
                    role="Assistant"
                    officeNo="T62"
                    edu="Bachelors"
                    img={wsn}
                    linkedin="/" // fill later
                    email="wnajar@ztic.edu.jo"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}
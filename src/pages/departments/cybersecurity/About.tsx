import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import Dnav from "@/components/DepNavbar"
export default function Cyber() {
    return (
        <>
            <NavBar />
            <main className="w-full h-fit bg-neutral-100">
                <Title name="Cyber Security" />
                <Dnav
                about="/departments/cybersecurity/about"
                members="/departments/cybersecurity/members"
                gplan="/departments/cybersecurity/guide-plan"
                />
                <h1
                className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                >About the Specialization</h1>
                <p className="px-10 pb-5 mt-5">Information protection and security has become an urgent necessity for individuals and institutions of all kinds, they should possess knowledge of methods that protect them from piracy that threatens the security of their information. With the spread of technical means for processing, storing, trading, exchanging, and interacting with data via the Internet and networks, cybersecurity, or what is called “cybersecurity,” has become a means of protecting systems and devices and electronic data in various business and data organizations.
                    The field of cybersecurity is considered one of the most vital fields in the information technology sector, as it examines theories and strategies for providing protection for information from potential threats, identifying modern hacking methods and avoiding them, assessing gaps and weaknesses in computer systems and networks, addressing gaps that lead to security breaches, and using and developing encryption software and information security.
                    <br /><br />The Cybersecurity Diploma Program at Zarqa Technical Intermediate College provides, from a technical standpoint, the means, tools and procedures necessary to ensure the protection of information from internal and external dangers from a legal perspective, information security is the subject of legal studies and measures to protect the confidentiality and integrity of information and combat activities that attack it or exploit its systems to commit crime. It is the goal of legislation to protect information from illegal activities that target information and its systems, such as internet crimes and digital electronic crimes.</p>
            </main>
            <Footer />
        </>
    )
}
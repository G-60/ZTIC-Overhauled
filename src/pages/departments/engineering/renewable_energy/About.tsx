import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Dnav from "@/components/DepNavbar";

export default function About() {
    return (
        <>
            <NavBar />
                <main className="w-full h-fit bg-neutral-100">
                <Title name="Renewable Energy Technology" />
                <Dnav
                about="/departments/engineering/renewable-energy-technology/about"
                members="/departments/engineering/renewable-energy-technology/members"
                plan="/departments/engineering/renewable-energy-technology/plan"
                />
                <div>
                <h1
                className="p-3 border-l-2 border-orange-400 text-2xl ml-10 mt-10"
                >About the Specialization</h1>
                <p className="px-10 pb-5 mt-5">
                    The specialty of renewable energy technology is a specialty that studies the various uses of clean energy
                    and its importance in reducing polluting emissions into the environment. 
                    The importance of this specialty lies in its economic and environmental impact alike, 
                    as it helps in achieving independence in energy production locally in light of the high prices 
                    of importing fossil fuels. The department offers the Renewable Energy Technology Program for the diploma stage
                    to prepare skilled technicians and specialists in all types of renewable energy systems. 
                    The department is equipped with the necessary laboratories with the latest devices, equipment, and all the necessary facilities for students and faculty and administrative members.
                </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
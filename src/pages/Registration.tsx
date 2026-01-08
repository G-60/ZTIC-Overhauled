import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import proshor from "@/assets/images/proshor.jpg"
import discounts from "@/assets/images/discounts.jpeg"
import requirements from "@/assets/images/requirements.jpg"
export default function Registration() {
    return (
        <>
            <NavBar />
            <main className="w-full h-fit bg-neutral-100">
                <Title
                name="Registration & Fees" />
                <figure className="my-10 mx-5 sm:mx-10">
                    <img src={proshor} alt="registration and fees image" 
                    className="border-2 border-orange-400 rounded-md"
                    />
                    <figcaption className="text-center mt-5">2025/2026</figcaption>
                </figure>
                <h2 id="discounts"
                className="p-5 border-l-3 border-orange-400 text-3xl font-medium ml-5 sm:ml-10"
                >Incentive Discounts</h2>
                <figure className="flex flex-col items-center mx-5 sm:mx-10 ">
                    <img src={discounts} alt="specification discounts image"
                    className="border-2 border-orange-400 rounded-md mt-10 sm:w-1/2
                    "/>
                    <figcaption className="text-center mt-5">
                        2025/2026
                    </figcaption>
                </figure>
                <section className="mx-5 sm:mx-10">
                    <h2
                    className="p-5 border-l-3 border-orange-400 text-3xl font-medium"
                    >Requirements</h2>
                        <figure className="flex flex-col items-center">
                            <img src={requirements} alt="registration requirements and notes" 
                            className="border-2 border-orange-400 rounded-md mt-10"
                            />
                            <figcaption
                            className="p-5"
                            >2025/2026</figcaption>
                        </figure>
                        <div>
                            <h3 className="pl-3 border-l-2 border-orange-400 text-2xl">Admission of international students.</h3>
                            <p className="mt-5">
                                
                                1. Non-Jordanian students are admitted to Zarqa Technical College provided they have passed the Jordanian General Secondary Certificate or its equivalent with a minimum grade of 50%.<br/><br />
                                2. The majors that international students can study are determined based on their high school branch, in accordance with the majors available for that branch, in line with the college's general student admission policy.<br /><br />
                                Students who have obtained a grade of 40% or higher in the general secondary school subjects as of the 2017/2018 academic year are allowed to be admitted to all college programs, provided<br />
                                that they obtain a grade of 50% or higher in the general secondary school exam and are allowed to bridge according to the general policy for accepting students who have obtained an intermediate university degree from Jordanian universities through bridging.
                            </p>     
                        </div>
                        <section>
                            <h3 className="pl-3 py-1 border-l-2 border-orange-400 text-2xl mt-10">Required Documents</h3>
                            <h4 className="pl-3 py-0.5 border-l-2 border-orange-400 text-xl mt-5">Jordanian Students:</h4>
                            <ol className="mt-5 list-disc ml-5">
                                <li>Original General Secondary Certificate transcript.</li>
                                <li>A certified copy of the Civil Status ID card.</li>
                                <li>A certified copy of the Birth Certificate.</li>
                                <li>A certified copy of a valid Military Service Deferment page (for males).</li>
                                <li>Two personal photographs.</li>
                            </ol>
                            <h4 className="pl-3 py-0.5 border-l-2 border-orange-400 text-xl mt-5">Non-Jordanian Students:</h4>
                            <ol className="mt-5 list-disc ml-5">
                                <li>Original General Secondary Certificate transcript.</li>
                                <li>A certified copy of a valid passport.</li>
                                <li>A certified copy of the Birth Certificate.</li>
                                <li>Two personal photographs.</li>
                            </ol>
                            <h4 className="pl-3 py-0.5 border-l-2 border-orange-400 text-xl mt-5">
                                Students Transferring from Other Colleges:
                            </h4>
                            <p className="mt-5 mb-5">An official transcript certified by the Community Colleges Unit and the Higher Education Office at Al-Balqa Applied University.</p>
                        </section>
                </section>
            </main>
            <Footer />
        </>
    )
}
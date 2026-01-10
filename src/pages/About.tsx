import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Title from "@/components/Title"
import GlareHover from "@/components/GlareHover"
import zabooutimg from "@/assets/images/ztic_about.jpeg"
import ghida from "@/assets/images/ghida.jpg"
import { useEffect } from "react"
import AnimatedContent from "@/components/AnimatedContent"
export default function About() {
    useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <>
        <NavBar />
        <main className="w-full h-fit pb-5 bg-neutral-100">
            <Title
            name="About the College" />
            <AnimatedContent>
                <section className="flex flex-wrap justify-center gap-y-5 mt-15 mx-5 sm:mx-10">
                    <h2
                    className="text-3xl p-3 border-l-3 border-orange-400 w-full font-medium"
                    >Description</h2>
                    <p>
                        The Zarqa Technical College was established in 2018 and awards intermediate university degrees. 
                        It boasts a faculty of highly experienced and skilled members who are able to keep pace with rapid 
                        scientific developments in all practical, technological, and applied fields.<br /><br />
                        Based on its belief in the importance of academic and research work and professional and technical 
                        learning, the college proudly strives to enrich our dear students with practical experience built 
                        on sound scientific foundations and high-level equipment, which reflects positively on the 
                        Hashemite Kingdom of Jordan's approach under the Hashemite banner regarding the importance 
                        of providing practical experience that can engage in the local and regional labor market.<br /><br />
                        The college comprises seven main departments, which are: First: the Engineering Department 
                        (renewable energy technology, electric and hybrid vehicle maintenance). Second: the Arts Department 
                        (animation, digital media). Third: Administrative Sciences Department (Technical Accounting, E-Business 
                        Management, Customs and Tax Sciences). Fourth: Information Technology Department (Cybersecurity, 
                        Artificial Intelligence Engineering, and Robotics). Fifth: Languages Department (Applied English). 
                        Sixth: Architecture (Architecture and Interior Design). Seventh: Associate Nursing Department 
                        (Associate Nursing). In addition to the Service Courses Department.<br /><br />
                        This year, a new major was introduced: Customs and Tax Sciences and Associate Nursing, in response 
                        to the growing local and regional labor market demand for these types of majors.
                    </p>
                    <img src={zabooutimg} alt="ztic building" 
                    className="border-2 border-orange-400 rounded-4xl hover:scale-102 transition-all" />
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-5 sm:mx-10">
                    <div>
                        <h2
                        className="text-3xl p-3 border-l-3 border-orange-400 font-medium"
                        >Vision and Mission</h2>
                        <h3
                        className="text-2xl pl-3 mt-5 border-l-3 border-orange-400"
                        >Vision</h3>
                        <p className="mt-5">
                            Leadership in providing technical education to serve the local, regional and international community.
                        </p>
                        <h3
                        className="text-2xl pl-3 mt-5 border-l-3 border-orange-400"
                        >Mission</h3>
                        <p className="mt-5">
                            Building a distinguished technical generation capable 
                            of effectively contributing to building society and creating a distinguished 
                            scientific environment by providing and harnessing all cognitive means capable 
                            of raising the educational level and competing in various scientific fields.
                        </p>
                    </div>
                    <div className="flex justify-center overflow-hidden">
                        <figure>
                        <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.5}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={500}
                        playOnce={false}
                        borderRadius="100%"
                        borderColor="orange"
                        width=""
                        height=""
                        className="hover:scale-105 duration-250 transition-all mt-5 border-2"
                        >
                            <img src={ghida}
                            alt="Ghaida Abu Rumman image" 
                            className="w-100 h-100 object-cover rounded-full cursor-default"
                            />
                            </GlareHover>
                            <figcaption className="text-center text-neutral-600 mt-3">Dr. Ghaida Abu Rumman<br/>College Dean</figcaption>
                        </figure> 
                    </div>
                </section>
            </AnimatedContent>
        </main>
        <Footer />
        </>
    )
}
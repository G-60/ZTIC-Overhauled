import { Link } from "react-router-dom"
import facebook from "@/assets/icons/facebook.svg"
import instagram from "@/assets/icons/instagram.svg"
import { useEffect } from "react";
export default function Footer() {
    useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    }, []);
    return (
        <footer className="bg-linear-to-b from-blue-800 via-blue-900 to-blue-950 text-neutral-50 w-full grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
            <section className="m-8">
                <h2 className="inline text-2xl font-bold underline underline-offset-8 decoration-orange-400">Contact Us</h2>
                <address className="mt-8 grid gap-1 text-md">
                    <span>00962799900091</span>
                    <span>00962799900091</span>
                    <span>EXT: 053821100/7501</span>
                    <span>FAX: 0096253902040</span>
                    <a href="mailto:http://mail.ztic.edu.jo/"
                    className="underline underline-offset-2 hover:decoration-orange-400 hover:text-orange-400 transition-all"
                    >Email Us</a>
                </address>
            </section>
            <section className="m-8">
                <h2 className="text-2xl font-bold  underline underline-offset-8 decoration-orange-400">Registration</h2>
                <ul className="grid gap-5 text-sm mt-8">
                    <li>
                        <a href="https://ztic.edu.jo/images/2024/General/Corresponding-disciplines-for-bridging.pdf"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all" rel="noreferrer">
                            Corresponding Specializations for Bridging
                        </a>
                    </li>
                    <li>
                        <Link to="/registration"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all"
                        >Registration & Fees</Link>
                    </li>
                    <li>
                        <Link to="/registration#discounts"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all"
                        >Incentive Discounts</Link>
                    </li>
                </ul>
            </section>
            <section className="m-8">
                <h2 className="text-2xl font-bold  underline underline-offset-8 decoration-orange-400">Other Content</h2>
                <ul className="mt-8 grid gap-5 text-sm">
                    <li>
                        <a href="https://ztic.edu.jo/images/2024/General/calender-compressed.pdf" target="_blank"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all">
                            Academic Calendar
                        </a>
                    </li>
                    <li>
                        <a href="https://ztic.edu.jo/index.php/en/2018-03-19-12-03-22/2024-07-08-08-34-31"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all">
                            Academic Schedule</a>
                    </li>
                    <li>
                        <a href="https://elearning.ztic.edu.jo/login/index.php"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all">
                            E-learning
                        </a>
                    </li>
                    <li>
                        <Link to="/Gallery"
                        className="hover:underline underline-offset-2 decoration-orange-400 transition-all"
                        >Gallery</Link>
                    </li>
                </ul>
            </section>
            <section className="col-span-full">
                <ul className="grid gap-2">
                    <li className="w-8 h-8 flex ml-8 justify-center items-center bg-white
                    hover:bg-blue-600 hover:scale-103 transition-all rounded">
                        <a href="https://web.facebook.com/ZTICPage/?_rdc=1&_rdr#">
                            <img src={facebook} alt="our facebook" />
                        </a>
                    </li>
                    <li className="w-8 h-8 flex ml-8 justify-center items-center bg-white
                    hover:bg-purple-500 hover:scale-103 transition-all rounded">
                        <a href="https://www.instagram.com/ztic.page/?hl=en">
                            <img src={instagram} alt="our instagram" />
                        </a>
                    </li>
                    <li className="grid place-items-center text-sm text-neutral-300 ml-5">
                        We seek to receive your constructive feedback via email and private phone number at Zarqa Technical Intermediate College:
                        <a href="mailto:sec@ztic.edu.jo" rel="noreferrer"
                        className="hover:text-orange-400 text-orange-300 transition-all"
                        >sec@ztic.edu.jo</a>
                        <a href="tel:0780020055" rel="noreferrer"
                        className="hover:text-orange-400 text-orange-300 transition-all"
                        >0780020055</a>
                    </li>
                    <li className="place-items-center-safe">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.9002446560557!2d36.1522090907262!3d32.057668731033885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b6fc4d7bd242d%3A0x5d2c08ef4ad5ea94!2sZarqa%20Technical%20Intermediate%20College!5e1!3m2!1sen!2sjo!4v1767719857349!5m2!1sen!2sjo" 
                            className="w-full md:w-1/2 px-10"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                </ul>
            </section>
            <section className="col-span-full bg-neutral-900 text-white text-center p-1">
                <p className="text-sm">Copyright © 2026 ZTIC. All Rights Reserved</p>
            </section>
        </footer>
    )
}
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
interface routes {
    about: string,
    members: string,
    plan: string
}
export default function Dnav( {about, members, plan} : routes) {
    useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    }, []);
    return (
        <>
        <nav className="flex justify-center pt-5 bg-neutral-100 px-5">
            <ul className="flex justify-evenly w-100 bg-neutral-200 rounded-2xl font-semibold">
                <li
                className="hover:bg-gray-300 p-2 rounded-full transition-all duration-300">
                    <NavLink to={about}
                    className={({ isActive }) => (isActive ? "border-b-2 border-gray-500 px-2" : "")}>
                    About
                    </NavLink>
                </li>
                <li className="hover:bg-gray-300 p-2 rounded-full transition-all duration-300">
                    <NavLink to={members}
                    className={({ isActive }) => (isActive ? "border-b-2 border-gray-500 px-2" : "")}>
                    Members
                    </NavLink>
                </li>
                <li className="hover:bg-gray-300 p-2 rounded-full transition-all duration-300">
                    <NavLink to={plan}
                    className={({ isActive }) => (isActive ? "border-b-2 border-gray-500 px-2" : "")}>
                    Study Plan
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}
import Inlogo from "@/assets/icons/LI-In-Bug.png"
interface Info {
    name: string,
    img: string,
    role: string,
    officeNo: string,
    edu: string,
    linkedin: string,
    email: string,

}
export default function Pcard({ name, img, role, officeNo, edu, linkedin, email }: Info) {
    return (
        <>
            <div className="flex flex-col justify-between items-center h-155 border-2 w-90
             border-gray-300 rounded shadow-md bg-white hover:scale-101 hover:shadow-2xl
              hover:border-orange-400 transition-all duration-150">
                <img src={img} alt={`${name}s photo`}
                className="w-full h-1/2 border-b-3"
                />
                <h2
                className="text-2xl font-semibold mt-5"
                >{name}</h2>
                <span >{role}</span>

                <span
                className="mt-5 text-center"
                >Educational Qualifications: <br /><b>{edu}</b></span>
                <span className="pb-3 border-b-2 border-gray-400 mt-1">Office No: <b>{officeNo}</b></span>
                <a
                target="_blank"
                href={linkedin || undefined}
                className={`p-2 text-white rounded flex items-center justify-center mt-5 transition-all
                ${!linkedin ? "bg-neutral-800/40 cursor-not-allowed select-none" : "bg-neutral-800 hover:bg-neutral-900"}`}
                onClick={e => {
                if (!linkedin) e.preventDefault();
                }}
                >
                    <img src={Inlogo} alt="LinkedIn logo" className="w-7 mr-2" />
                    LinkedIn
                </a>
                <a href={`mailto:${email}`} rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 p-5"
                >{email}</a>
            </div>
        </>
    )
}
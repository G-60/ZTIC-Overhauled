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
            <div className="flex flex-col justify-between items-center w-70 border-2
             border-gray-300 rounded shadow-md hover:scale-101 hover:shadow-2xl
              hover:border-orange-400 transition-all duration-150">
                <img src={img} alt={`${name} photo`}
                className="w-full "
                />
                
                <h2
                className="text-2xl font-semibold mt-5"
                >{name}</h2>
                <span >{role}</span>

                <span
                className="mt-5 text-center"
                >Educational Qualifications: <br /><b>{edu}</b></span>
                <span className="pb-3 border-b-2 border-gray-400 mt-1">Office No: <b>{officeNo}</b></span>
                <a href={linkedin}
                className="p-2 text-white bg-neutral-800 hover:bg-neutral-900 transition-all rounded text-sm flex items-center justify-center mt-5"
                >
                    <img src={Inlogo} alt="Linkedin logo"
                    className="w-7"    
                    rel="noopener noreferrer"
                    />LinkedIn</a>

                <a href={`mailto:${email}`} rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 p-5"
                >{email}</a>
            </div>
        </>
    )
}
interface Major {
  name: string
  path: string
}

interface Info {
  dimg: string
  dname: string
  majors?: Major[]
}
import { NavLink } from "react-router-dom"

export default function Dcard({ dimg, dname, majors }: Info) {
  return (
    <div className="flex flex-col h-100 gap-3 text-center border-2 rounded-md hover:scale-102 bg-white hover:border-orange-400 transition-all duration-100 border-gray-400">
      <img src={dimg} alt={dname} className="bg-contain h-1/2 rounded-tl-sm rounded-tr-sm" />

      <h2 className="text-xl font-semibold mb-1.5">
        {dname}
      </h2>

      {majors?.map((major) => (
        <NavLink
          key={major.path}
          to={major.path}
          className="text-blue-700 hover:underline block "
        >
          {major.name}
        </NavLink>
      ))}
    </div>
  )
}

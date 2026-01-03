import logo from "@/assets/icons/ztic_logo.png"
interface title {
    name: string
}
export default function Title({name}: title) {
    return (
        <>
            <div className='flex flex-col-reverse items-center gap-y-3 bg-neutral-100 text-center'>
                <h1 className='text-3xl font-medium'>{name}</h1>
                <img src={logo} alt="zitc logo" width={150} className="mt-15" />
            </div>
        </>
    )
}

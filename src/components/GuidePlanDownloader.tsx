interface guidePlanProps {
    gimg: string

}
export default function Gplan( {gimg}: guidePlanProps) {
    // download guide plan
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = gimg;
    link.download = "guide-plan.png";
    link.click();
  };

    return (
        <>
            <main className="w-full h-fit flex py-10 justify-center bg-neutral-100">
                <button type="button" onClick={handleDownload}
                className="cursor-pointer text-2xl border-b-2 border-blue-600 text-blue-600 
                hover:border-orange-400 hover:text-orange-400 transition-all"
                >Download Plan</button>
            </main>
        </>
    )
}
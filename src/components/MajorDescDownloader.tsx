interface majorPlanProps {
    descpdf: string

}
export default function MajorDescriptionDownloader( {descpdf}: majorPlanProps) {
    // download guide plan
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = descpdf;
    link.download = descpdf.split("/").pop() || "file.pdf";;
    link.click();
  };

    return (
        <>
            <main className="w-full h-50 pt-20 justify-center text-center bg-neutral-100">
                <button type="button" onClick={handleDownload}
                className="cursor-pointer text-2xl border-b-2 border-blue-600 text-blue-600 
                hover:border-orange-400 hover:text-orange-400 transition-all"
                >Download Plan</button>
            </main>
        </>
    )
}
import NavBar from "../NavBar"
import video from "@/assets/videos/ztic_video.mp4"
import logo from "@/assets/icons/ztic_logo.png"
import AnimatedContent from "../AnimatedContent"
function Header() {
    return (
        <header>
            <NavBar />
                <div className="flex justify-center items-end">
                    <figure>
                        <video src={video}
                        className="object-cover w-screen h-screen saturate-150 contrast-110 text-center"
                        muted autoPlay loop disablePictureInPicture disableRemotePlayback>
                            Failed to load video, try refreshing
                        </video>
                    </figure>
                      <div className="absolute sm:inset-0 w-full h-screen bg-black/35 pointer-events-none"></div>
                      <div className="absolute bottom-5">
                        <AnimatedContent>
                        <figure className="flex flex-col place-items-center">
                            <img src={logo} alt="zarqa technical intermediate college logo"
                            className="w-35 sm:w-45 md:w-50" />
                            <figcaption className="text-base sm:text-xl text-neutral-50 font-bold text-shadow-black text-shadow-2xs">Zarqa Technical Intermediate College</figcaption>
                        </figure>
                        </AnimatedContent>
                      </div>
                </div>
            </header>
    )
}
export default Header
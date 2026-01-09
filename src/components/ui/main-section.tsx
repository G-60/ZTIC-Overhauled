import Stack from '../Stack'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/Card"
import CountUp from './CountUp'
// stack images
import AnimatedContent from '../AnimatedContent'
import img1 from "@/assets/images/ztic_img.jpg"
import img2 from "@/assets/images/ztic_img2.jpg"
import img3 from "@/assets/images/ztic_img3.jpg"
import img4 from "@/assets/images/ztic_img4.jpg"
import img5 from "@/assets/images/ztic_img5.jpg"
import img6 from "@/assets/images/ztic_img6.jpg"
import img7 from "@/assets/images/ztic_img7.jpg"
import img8 from "@/assets/images/ztic_img8.jpg"
import img9 from "@/assets/images/ztic_img9.jpg"
import img10 from "@/assets/images/ztic_img10.jpg"
// icons
import student from "@/assets/icons/student.svg"
import graduate from "@/assets/icons/graduate.svg"
import group from "@/assets/icons/group.svg"
import tools from "@/assets/icons/tools.svg"
// object to map the images
const imgs = [
    {id: 1, img: img1, alt: "ztic image one"},
    {id: 2, img: img2, alt: "ztic image two"},
    {id: 3, img: img3, alt: "ztic image three"},
    {id: 4, img: img4, alt: "ztic image four"},
    {id: 5, img: img5, alt: "ztic image five"},
    {id: 6, img: img6, alt: "ztic image six"},
    {id: 7, img: img7, alt: "ztic image seven"},
    {id: 8, img: img8, alt: "ztic image eight"},
    {id: 9, img: img9, alt: "ztic image nine"},
    {id: 10, img: img10, alt: "ztic image ten"}
]

export default function Main() {
    return (
        <AnimatedContent
        duration={2}
        distance={200}
        >
            <main className="container-fluid overflow-x-hidden h-1/2 relative grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center bg-linear-to-b from-neutral-50 via-neutral-100 to-neutral-200">
                    <h1 className="col-span-full text-2xl text-center font-black my-10 m-2">Zarqa Technical Intermediate College</h1>
                    <div className="absolute z-1 left-50 top-50 rounded-full bg-neutral-600/10 w-25 h-25"></div>
                    <div className="absolute z-1 right-30 rounded-full bg-neutral-600/10 w-25 h-25"></div>
                    <div className="absolute z-1 left-125 top-75 rounded-full bg-neutral-600/10 w-25 h-25"></div>
                    <div className="mt-10 z-5">
                        <h2 className="text-3xl font-medium ml-3 sm:ml-5 md:ml-10">About</h2>
                        <p className="border-l-2 border-orange-400 ml-3 sm:ml-5 md:ml-10 pl-3 mt-10 text-neutral-700">
                        <b>Zarqa Technical Intermediate College</b> is a newly established college within Zarqa University that grants
                        the intermediate university degree, and includes within it an elite group of faculty members
                        with high experience and distinguished competence capable
                        of keeping pace with rapid scientific development in all fields on the practical or technological level.</p>
                        <Link to="/about"
                        className='ml-10 mt-5 py-2 px-4 inline-block border border-orange-400 rounded-sm
                        hover:bg-orange-400 hover:text-white transition-all duration-150 ease-in
                        '
                        >
                        Read More
                        </Link>
                    </div>
                    <div className="col-span-full sm:col-span-1 my-10 sm:my-0 z-10 hover:scale-103 transition-all">
                    <Stack
                        randomRotation={true}
                        sensitivity={150}
                        sendToBackOnClick={true}
                        cardDimensions={{ width: 300, height: 300 }}
                        cardsData={imgs}
                        />
                    </div>
                    <section className='w-full col-span-full justify-items-center
                     grid gap-y-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-25 mb-20
                     py-3'>
                            <h2 className='col-span-full text-3xl'>Statistics</h2>
                            <p className='col-span-full text-neutral-600'>You make it possible.</p>
                            <Card>
                                <CardTitle>
                                    <img src={student} alt="group icon"
                                    className='invert h-15'
                                    ></img>
                                    <p>
                                        <CountUp
                                        from={0}
                                        to={2500}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />+
                                </p>
                                    </CardTitle>
                                <CardContent>
                                    Students
                                </CardContent>
                            </Card>
                            <Card>
                                <CardTitle>
                                    <img src={group} alt="group icon"
                                    className='invert h-15'
                                    ></img>
                                    <p>
                                        <CountUp
                                        from={0}
                                        to={50}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />+
                                    </p>
                                </CardTitle>
                                <CardContent>
                                    Faculty Members
                                </CardContent>
                            </Card>
                        <Card>
                            <CardTitle>
                                <img src={graduate} alt="graduation icon" 
                                className='invert h-15'
                                />
                                <p>
                                    <CountUp
                                    from={0}
                                    to={5000}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                    />+
                                </p>
                            </CardTitle>
                            <CardContent>
                                Graduates
                            </CardContent>
                            </Card>
                            <Card>
                                <CardTitle>
                                    <img src={tools} alt="tools icon" 
                                    className='invert h-15'
                                    />
                                    <p>
                                        <CountUp
                                        from={0}
                                        to={10}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />+
                                    </p>
                                    </CardTitle>
                                <CardContent>
                                    Majors
                                </CardContent>
                            </Card>
                    </section>
            </main>
        </AnimatedContent>
    )
}
import { useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Title from '@/components/Title';

import Dcard from '@/components/DepartmentCards';

// imgs
import arch from "@/assets/images/departmentimgs/architecture.jpg"
import eng from "@/assets/images/departmentimgs/engineering.jpg"
import nurse from "@/assets/images/departmentimgs/nurse.jpg"
import it from "@/assets/images/departmentimgs/it.jpg"
import fin from "@/assets/images/departmentimgs/financ.jpg"
import arts from "@/assets/images/departmentimgs/media.jpg"
import lang from "@/assets/images/departmentimgs/langs.jpg"

export default function Departments() {
        useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        }, []);
    
    return (
        <>
        <NavBar />
        <Title name="Departments"/>
        <AnimatedContent>
        <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-5 bg-neutral-100'>
            <Dcard
            dimg={arts}
            dname="Applied Arts"
            majors={[
                { name: "Digital Media", path: "/departments/applied-arts/digital-media/about"},
                { name: "Animation Arts", path: "/departments/applied-arts/animation-arts/about"}
            ]}
            />
            <Dcard
            dimg={arch}
            dname="Architecture"
            majors={[
                { name: "Architecture and Interior Design", path: "/departments/architecture-and-interior-design/about" },
            ]}
            />
            <Dcard
            dimg={nurse}
            dname="Associate Nursing"
            majors={[
                { name: "Associate Nursing", path: "/departments/associate-nursing/about" },
            ]}
            />
            <Dcard
            dimg={eng}
            dname="Engineering"
            majors={[
                { name: "Renewable Energy Technology", path: "/departments/engineering/renewable-energy-technology/about" },
                { name: "Electric and Hybrid Vehicle Maintenance", path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/about"}
            ]}
            />
            <Dcard
            dimg={fin}
            dname="Financial and Administrative Sciences"
            majors={[
                { name: "E-Business Management", path: "/departments/financial-and-administrative-sciences/ebusiness/about" },
                { name: "Technical Accounting", path: "/departments/financial-and-administrative-sciences/accounting/about"},
                { name: "Tax and Customs Sciences", path: "/departments/financial-and-administrative-sciences/tax-and-customs-sciences/about"}
            ]}
            />
            <Dcard
            dimg={it}
            dname="Information Technology"
            majors={[
                { name: "Artificial Intelligence and Robotics Engineering", path: "/departments/it/ai/about" },
                { name: "Cyber Security", path: "/departments/it/cybersecurity/about"}
            ]}
            />
            <Dcard
            dimg={lang}
            dname="Languages"
            majors={[
                { name: "Applied English Language", path: "/departments/applied-english/about"}
            ]}
            />
        </main>
        </AnimatedContent>
        <Footer />
        </>
    )
}
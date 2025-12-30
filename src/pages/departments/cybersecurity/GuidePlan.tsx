import Gplan from "@/components/GuidePlanDownloader"
import CyberPlan from '@/assets/images/departmentimgs/guide_plans/cybersecurity.png'
export default function guidePlanPage() {
    return (
        <>
        <Gplan
        title="Cybersecurity Guide Plan"
        guideplanimg={CyberPlan}
        />
        </>
    )
}
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Departments from "./pages/departments/Departments";

// digital media pages
import DigitalMediaAbout from "@/pages/departments/arts/digital_media/About"
import DigitalMediaMembers from "@/pages/departments/arts/digital_media/Members"
import DigitalMediaPlan from "@/pages/departments/arts/digital_media/Plan"

// animation arts
import AnimationAbout from "@/pages/departments/arts/animation/About"
import AnimationMembers from "@/pages/departments/arts/animation/Members"
import AnimationPlan from "@/pages/departments/arts/animation/Plan"

// renewable energy technology
import RenergyAbout from "@/pages/departments/engineering/renewable_energy/About"
import RenergyMembers from "@/pages/departments/engineering/renewable_energy/Members"
import RenergyPlan from "@/pages/departments/engineering/renewable_energy/Plan"

// electric & hybrid vehicle maintenance 
import EhvmAbout from "@/pages/departments/engineering/electric_hybrid/About"
import EhvmMembers from "@/pages/departments/engineering/electric_hybrid/Members"
import EhvmPlan from "@/pages/departments/engineering/electric_hybrid/Plan"

// architecture and interior design
import ArchAbout from "@/pages/departments/architecture_and_interior_design/About"
import ArchMembers from "@/pages/departments/architecture_and_interior_design/Members"
import ArchPlan from "@/pages/departments/architecture_and_interior_design/Plan"

// nursing
import NurseAbout from "@/pages/departments/a_nursing/About"
import NurseMembers from "@/pages/departments/a_nursing/Members"
import NursePlan from "@/pages/departments/a_nursing/Plan"

// applied english
import EnglishAbout from "@/pages/departments/applied_english/About"
import EnglishMembers from "@/pages/departments/applied_english/Members"
import EnglishPlan from "@/pages/departments/applied_english/Plan"
// ebusiness
import EbusinessAbout from "@/pages/departments/financial_and_administrative_sciences/ebusiness/About"
import EbusinessMembers from "@/pages/departments/financial_and_administrative_sciences/ebusiness/Members"
import EbusinessPlan from "@/pages/departments/financial_and_administrative_sciences/ebusiness/Plan"

// techncial accounting
import AccountingAbout from "@/pages/departments/financial_and_administrative_sciences/accounting/About"
import AccountingMembers from "@/pages/departments/financial_and_administrative_sciences/accounting/Members"
import AccountingPlan from "@/pages/departments/financial_and_administrative_sciences/accounting/Plan"

// tax and customs sciences
import TaxAbout from "@/pages/departments/financial_and_administrative_sciences/tax_and_customs_sciences/About"
import TaxMembers from "@/pages/departments/financial_and_administrative_sciences/tax_and_customs_sciences/Members"
import TaxPlan from "@/pages/departments/financial_and_administrative_sciences/tax_and_customs_sciences/Plan"
// ai
import AiAbout from "@/pages/departments/it/ai/About"
import AiMembers from "@/pages/departments/it/ai/Members"
import AiPlan from "@/pages/departments/it/ai/Plan"
// Cybersecurity pages
import CyberAbout from "./pages/departments/it/cybersecurity/About";
import CyberMembers from "./pages/departments/it/cybersecurity/Members";
import CyberPlan from "./pages/departments/it/cybersecurity/Plan";

import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Portals from "./pages/Portals";
import About from "./pages/about/About";

const router = createHashRouter([
  // navbar
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/departments",
    element: <Departments />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/portals",
    element: <Portals />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // departments
  // digital media
  {
    path: "/departments/applied-arts/digital-media/about",
    element: <DigitalMediaAbout />
  },
  // animation arts
  {
    path: "/departments/applied-arts/animation-arts/about",
    element: <AnimationAbout />
  }, 
  {
    path: "/departments/applied-arts/animation-arts/members",
    element: <AnimationMembers />
  },
  {
    path: "/departments/applied-arts/animation-arts/plan",
    element: <AnimationPlan />
  },
  {
    path: "/departments/applied-arts/digital-media/members",
    element: <DigitalMediaMembers />
  },
  {
    path: "/departments/applied-arts/digital-media/plan",
    element: <DigitalMediaPlan />
  },
  // renewable energy
  {
    path: "/departments/engineering/renewable-energy-technology/about",
    element: <RenergyAbout />
  },
  {
    path: "/departments/engineering/renewable-energy-technology/members",
    element: <RenergyMembers />
  },
  {
    path: "/departments/engineering/renewable-energy-technology/plan",
    element: <RenergyPlan />
  },
  // electric & hybrid vehicle
  {
    path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/about",
    element: <EhvmAbout />
  },
  {
    path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/members",
    element: <EhvmMembers />
  },
  {
    path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/plan",
    element: <EhvmPlan />
  },
  // architecture and interior design
  
  {
    path: "/departments/architecture-and-interior-design/about",
    element: <ArchAbout />
  }, {
    path:"/departments/architecture-and-interior-design/members",
    element: <ArchMembers />
  },
  {
    path: "/departments/architecture-and-interior-design/plan",
    element: <ArchPlan />
  },
  // a_nursing
  {
    path: "/departments/associate-nursing/about",
    element: <NurseAbout />
  },
  {
    path: "/departments/associate-nursing/members",
    element: <NurseMembers />
  },
  {
    path: "/departments/associate-nursing/plan",
    element: <NursePlan />
  },
  // applied english
  {
    path: "/departments/applied-english/about",
    element: <EnglishAbout />
  },
  {
    path: "/departments/applied-english/members",
    element: <EnglishMembers />
  },
  {
    path: "/departments/applied-english/plan",
    element: <EnglishPlan />
  },
  // ebusiness
  {
    path: "/departments/financial-and-administrative-sciences/ebusiness/about",
    element: <EbusinessAbout />
  },
  {
    path: "/departments/financial-and-administrative-sciences/ebusiness/members",
    element: <EbusinessMembers />
  },
  {
    path: "/departments/financial-and-administrative-sciences/ebusiness/plan",
    element: <EbusinessPlan />
  },
  // technical accounting
  {
    path: "/departments/financial-and-administrative-sciences/accounting/about",
    element: <AccountingAbout />
  },
  {
    path: "/departments/financial-and-administrative-sciences/accounting/members",
    element: <AccountingMembers />
  },
  {
    path: "/departments/financial-and-administrative-sciences/accounting/plan",
    element: <AccountingPlan />
    
  },
    // tax and customs sciences

  {
    path: "/departments/financial-and-administrative-sciences/tax-and-customs-sciences/about",
    element: <TaxAbout />
  },
  {
    path: "/departments/financial-and-administrative-sciences/tax-and-customs-sciences/members",
    element: <TaxMembers />
  },
  {
    path: "/departments/financial-and-administrative-sciences/tax-and-customs-sciences/plan",
    element: <TaxPlan />
  },
  // ai
  {
    path: "/departments/it/ai/about",
    element: <AiAbout />
  },
  {
    path: "/departments/it/ai/members",
    element: <AiMembers />
  },
  {
    path: "/departments/it/ai/plan",
    element: <AiPlan />
  },
  // cybersecurity
  {
    path: "/departments/it/cybersecurity/about",
    element: <CyberAbout />,
  },
  {
    path: "/departments/it/cybersecurity/members",
    element: <CyberMembers />,
  },
  {
    path: "/departments/it/cybersecurity/plan",
    element: <CyberPlan />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

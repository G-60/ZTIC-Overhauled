import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Departments from "./pages/departments/Departments";

// digital media pages
import DigitalMediaAbout from "@/pages/departments/arts/digital_media/About"
import DigitalMediaMembers from "@/pages/departments/arts/digital_media/Members"
// renewable energy technology
import RenergyAbout from "@/pages/departments/engineering/renewable_energy/About"
import RenergyMemebers from "@/pages/departments/engineering/renewable_energy/Members"
// import RenergyGplan from "@/pages/departments/engineering/renewable_energy/GuidePlan"
// electric & hybrid vehicle maintenance 
import EhvmAbout from "@/pages/departments/engineering/electric_hybrid/About"
import EhvmMembers from "@/pages/departments/engineering/electric_hybrid/Members"
// import EhvmGplan from "@/pages/departments/engineering/electric_hybrid/GuidePlan"
// nursing
import NurseAbout from "@/pages/departments/a_nursing/About"
import NurseMembers from "@/pages/departments/a_nursing/Members"
// import NurseGplan from "@/pages/departments/a_nursing/GuidePlan"
// applied english pages
import EnglishAbout from "@/pages/departments/applied_english/About"
import EnglishMembers from "@/pages/departments/applied_english/Members"
// import EnglishGplan from "@/pages/departments/applied_english/GuidePlan"


// ai
import AiAbout from "@/pages/departments/it/ai/About"
import AiMembers from "@/pages/departments/it/ai/Members"
// import AiGplan from "@/pages/departments/it/ai/GuidePlan"
// Cybersecurity pages
import CyberAbout from "./pages/departments/it/cybersecurity/About";
import CyberMembers from "./pages/departments/it/cybersecurity/Members";
import CyberGplan from "./pages/departments/it/cybersecurity/GuidePlan";

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
  {
    path: "/departments/applied-arts/digital-media/members",
    element: <DigitalMediaMembers />
  },
  // {
  //   path: "/departments/applied-arts/digital-media/guide-plan",
  //   element: <DigitalMediaGplan />
  // }
  // renewable energy
  {
    path: "/departments/engineering/renewable-energy-technology/about",
    element: <RenergyAbout />
  },
  {
    path: "/departments/engineering/renewable-energy-technology/members",
    element: <RenergyMemebers />
  },
  // {
  //   path: "/departments/engineering/renewable-energy-technology/guide-plan",
  //   element: <RenergyGplan />
  // }
  // electric & hybrid vehicle
  {
    path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/about",
    element: <EhvmAbout />
  },
  {
    path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/members",
    element: <EhvmMembers />
  },
  // {
  //   path: "/departments/engineering/electric-and-hybrid-vehicle-maintenance/guide-plan",
  //   element <EhvmGplan />
  // }
  // nursing
  {
    path: "/departments/associate-nursing/about",
    element: <NurseAbout />
  },
  {
    path: "/departments/associate-nursing/members",
    element: <NurseMembers />
  },
  // {
  //   path: "/departments/associate-nursing/guide-plan",
  //   element: <NurseGplan />
  // }
  
  // applied english
  {
    path: "/departments/applied-english/about",
    element: <EnglishAbout />
  },
  {
    path: "/departments/applied-english/members",
    element: <EnglishMembers />
  },
  // {
  //   path: "/departments/applied-english/guide-plan",
  //   element: <EnglishGplan />
  // },
  // ai
  {
    path: "/departments/it/ai/about",
    element: <AiAbout />
  },
  {
    path: "/departments/it/ai/members",
    element: <AiMembers />
  },
  // {
  //   path: "/departments/it/ai/guide-plan",
  //   element: <AiGplan />
  // }
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
    path: "/departments/it/cybersecurity/guide-plan",
    element: <CyberGplan />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

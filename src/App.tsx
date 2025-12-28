import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Departments from "./pages/departments/Departments";

// Cybersecurity pages
import Cyber from "./pages/departments/cybersecurity/About";
import Members from "./pages/departments/cybersecurity/Members";
import Gplan from "./pages/departments/cybersecurity/GuidePlan";

import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Portals from "./pages/Portals";
import About from "./pages/about/About";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/Departments",
    element: <Departments />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/Portals",
    element: <Portals />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Departments/Cybersecurity/About",
    element: <Cyber />,
  },
  {
    path: "/Departments/Cybersecurity/Members",
    element: <Members />,
  },
  {
    path: "/Departments/Cybersecurity/Guide-Plan",
    element: <Gplan />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

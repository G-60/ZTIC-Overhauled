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
  {
    path: "/departments/cybersecurity/about",
    element: <Cyber />,
  },
  {
    path: "/departments/cybersecurity/members",
    element: <Members />,
  },
  {
    path: "/departments/cybersecurity/guide-plan",
    element: <Gplan />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

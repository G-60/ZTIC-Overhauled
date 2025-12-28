import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./pages/Home.tsx"
import Departments from './pages/departments/Departments.tsx'
// Cybersecurity Pages
import Cyber from './pages/departments/cybersecurity/About.tsx'
import Members from './pages/departments/cybersecurity/Members.tsx'
import Gplan from '@/pages/departments/cybersecurity/GuidePlan.tsx'








import NotFound from './pages/NotFound.tsx' 
import Gallery from './pages/Gallery.tsx'
import Portals from "./pages/Portals.tsx"
import About from './pages/about/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/Departments',
    element: <Departments />
  },
  {
    path: '/Gallery',
    element: <Gallery />
  },
  {
    path: '/Portals',
    element: <Portals />
  },
  {
    path: '/About',
    element: <About />
  },
  // Cybersecurity
  {
    path: '/Departments/Cybersecurity/About',
    element: <Cyber />
  },
  {
    path: '/Departments/Cybersecurity/Members',
    element: <Members />
  },
  {
    path: '/Departments/Cybersecurity/Guide-Plan',
    element: <Gplan />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/ztic_logo.png"

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/departments", label: "Departments" },
    { to: "/portals", label: "Portals" },
    { to: "/registration", label: "Registration" },
    { to: "/about", label: "About" },
  ];

  const linkClass = (isActive: boolean) =>
    isActive
      ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2 py-0.5 text-white"
      : "rounded-full hover:bg-blue-800 w-fit text-center py-0.5 px-2";

  return (
    <nav className="w-full bg-neutral-100 shadow-md">
      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => linkClass(isActive)}>
                    {link.label}
                  </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex bg-blue-800 text-white justify-between items-center px-5 py-1.5">
        <span className="font-bold text-lg">
            <img src={logo} alt="zitc logo" width={40}/>
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl focus:outline-none"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden flex flex-col justify-center items-center gap-2 px-4 p-3 bg-blue-900 text-white">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => linkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

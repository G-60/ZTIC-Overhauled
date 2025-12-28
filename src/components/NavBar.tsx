import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuViewport
} from './ui/navigation-menu'
import { NavLink } from "react-router-dom";
export default function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2" : "")}                    
                        >
                        Home
                    </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                    <NavLink
                    to="/Departments"
                    className={({ isActive }) => (isActive ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2" : "")}                    
                    >
                    Departments
                    </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NavLink
                        to="/Portals"
                        className={({ isActive }) => (isActive ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2" : "")}                    
                        >
                        Portals
                    </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NavLink
                        to="/Registration"
                        className={({ isActive }) => (isActive ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2" : "")}                    
                        >
                        Registration
                    </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <NavLink
                        to="/About"
                        className={({ isActive }) => (isActive ? "rounded-full border-blue-500 bg-blue-800 w-fit text-center px-2" : "")}                    
                        >
                        About
                    </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}
import { Collapse, IconButton, Navbar, Typography } from "@material-tailwind/react";
import { useState } from "react";
import NavList from "./Navlist";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header () {

    const [openNav, setOpenNav] = useState(false);

    return <div
    className="w-full h-full bg-no-repeat bg-cover bg-left bg-fixed"
    style={{backgroundImage : 'url ("https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80")'}} 
    >
    <div className="">
        <Navbar className=" sticky mx-auto max-w-screen-xl px-6 py-3 mt-6">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to={"/"}>
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        Yoan Nougué-Ruiz
                    </Typography>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    </div>
</div>;
}

export default Header;
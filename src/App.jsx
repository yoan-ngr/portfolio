import { Button } from "@material-tailwind/react";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import NavList from "./components/Navlist";
import Header from "./components/Header";

    
function App () {
        
    
    
    const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
    
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Header />
                <div className="mx-24 my-12 h-/5"><Outlet /></div>
                <Footer />
            </>,
            errorElement: <div>ksos</div>,
            children : [
                {
                    path: "/",
                    element: <div>salut</div>,
                },
                {
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    path: "/portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ]
        },
        
        
      ]);
        
        
    return <>
        <RouterProvider router={router} />
    </>
}
            
export default App;
import HeaderComponent from "./HeaderComp";
import Body from "./Body"
import TestComponent from "./TestComponent";
import Exp from './Exp';
import About from './About';
import { Outlet } from "react-router";
import Accordion from "./Accordion";

const Layout = () => {
    return (
        <div >
            {/* className="container" */}
        {/* <HeaderComponent/>
        <Outlet/>
         <Body/> */}
        <Accordion/>
        </div>
    );
};

export default Layout;


//Bundlers --> WebPack, Parcel
/**
 * 
 * ~ minor version fixes ~1.2.3 -- 1.2.9
 * ^ major version ^1.2.3 -- 1.9.9
 * 
 * Package.lock exact version 
 * 
 * Never in Package-lock.json
 * 
 *  script type="module" gives access for scripts to import and export
 * 
 * 
 * Vite
 * Parcel --- npx parcel entrypoint<index.html>
 * npx parcel build entrypoint
 * 
 * Tree Shaking Algo
 * 
 * Hot Module Reload or Replacement
 * 
 * Minification
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * {JSX}
 * {function comp ()}
 * {<funcComp/>}
 * 
 * {any piece of JavaScript but expressions}
 * 
 * 
 */


import React from "react";
import  ReactDOM from 'react-dom/client';
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Exp from "./components/Exp";
import About from "./components/About"
import TestComponent from "./components/TestComponent";


const appRouter = createBrowserRouter (
[
    {
        path: '/',
        element:<Layout/>,
        children:[{
        path: '/About',
        element:<About/>,
        },
        {
            path: '/Exp',
            element:<Exp/>,
            },
            {
                path: '/Test',
                element:<TestComponent/>,
                },
        ]
    }
]
);


const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<RouterProvider router={appRouter}/>);
import React from "react";
import { Outlet } from "react-router-dom";
import FplBanner from "../FplBanner/FplBanner";

const Layout = () => {
    return (
        <>
            <FplBanner />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;

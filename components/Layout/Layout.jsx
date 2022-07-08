import React, { Fragment } from "react";
import Hearder from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
        <Fragment>
            <Hearder />
            <div>{props.children}</div>
            <Footer />
        </Fragment>
    );
};

export default Layout;

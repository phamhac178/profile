import Hero from "../components/UI/Hero";
import type { NextPage } from "next";
import { Fragment } from "react";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Hero />
            <Services />
            <About />
            <Contact />
        </Fragment>
    );
};

export default Home;

import React from "react";
import Head from "next/head";

import NavBar1 from "../components/NavBar1";

import Footer from "./footer/Footer";
import Navbar from "./Navbar";
import NavBar3 from "./NavBar3/NavBar3";import Navbar4 from "./Navbar4";



const Layout = ({ title, children }) => (
  <>
    <Head>
      {/* <title>{blogConfig.blogName + ' | ' + (title || blogConfig.defaultTitle)}</title> */}
    </Head>

    <Navbar4/>

    <main>{children}</main>

    <Footer />
  </>
);

export default Layout;

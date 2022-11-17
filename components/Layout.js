import React from 'react';
import Head from 'next/head';


import NavBar1 from '../components/NavBar1'


import Footer from './footer/Footer';
import Navbar from './Navbar';


const Main = ({ title, children }) => (
    <>
        <Head>
            {/* <title>{blogConfig.blogName + ' | ' + (title || blogConfig.defaultTitle)}</title> */}
        </Head>
        
        <header>
            <NavBar1 />
            {/* <Navbar/> */}
        </header>
        
        <main>
            {children}
        </main>
        
        <Footer />
    </>
);

export default Main;
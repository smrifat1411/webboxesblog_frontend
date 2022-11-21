import { AnimatePresence, motion } from "framer-motion";
import Router, { useRouter } from "next/router";
// import "../stylesheets/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import "../stylesheets/globals.scss";
import "../stylesheets/nprogress.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import Navbar from "../components/Navbar";
import "../stylesheets/global.css";


//Route Events
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    // <AnimatePresence exitBeforeEnter>
    <ApolloProvider client={client}>
  
      <Layout  >
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ApolloProvider>

    // </AnimatePresence>
  );
}

export default MyApp;

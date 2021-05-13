import { Layout } from "antd";
import { CommonHeader } from "../components/CommonHeader";
import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>Riku Adachi</title>
      </Head>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <CommonHeader />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;

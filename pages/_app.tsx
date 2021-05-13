import { Layout } from "antd";
import { CommonHeader } from "../components/CommonHeader";
import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import type { AppProps } from "next/app";
import { Content } from "antd/lib/layout/layout";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

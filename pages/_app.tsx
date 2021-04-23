import { Layout } from 'antd'
import { CommonHeader } from '../components/CommonHeader'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Riku Adachi</title>
      </Head>
      <Layout
        style={{ minHeight: "100vh" }}>
        <CommonHeader />
        <Component {...pageProps} />
      </Layout>
    </div>
  )

}

export default MyApp

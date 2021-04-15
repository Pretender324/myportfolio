import { Layout } from 'antd'
import { CommonHeader } from '../components/CommonHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      style={{ height: "100vh" }}>
      <CommonHeader/>
      <Component {...pageProps} />
    </Layout>
  )
    
}

export default MyApp

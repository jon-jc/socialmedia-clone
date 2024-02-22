import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import LoginModel from "@/components/Models/LoginModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}

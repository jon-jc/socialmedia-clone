import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import LoginModel from "@/components/Models/LoginModel";
import RegisterModel from "@/components/Models/RegisterModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModel/>
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}

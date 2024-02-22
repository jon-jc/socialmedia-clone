import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Model from "@/components/Model";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Model actionLabel="submit" isOpen title="test" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}

import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import LoginModel from "@/components/Models/LoginModel";
import RegisterModel from "@/components/Models/RegisterModel";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModel from "@/components/Models/EditModel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModel />
      <RegisterModel />
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

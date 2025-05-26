//index.tsx

import Head from "next/head";
import DashboardLayout from "../components/DashboardLayout";
import ServicesModal from "../components/ServicesModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bytebank</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <DashboardLayout>
        <ServicesModal />
      </DashboardLayout>
    </>
  );
}

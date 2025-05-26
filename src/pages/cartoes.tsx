//cartoes.tsx

import Head from "next/head";
import DashboardLayout from "../components/DashboardLayout";
import CardsModal from "../components/CardsModal";

export default function Cartoes() {
  return (
    <>
      <Head>
        <title>Bytebank - Meus Cartões</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <DashboardLayout>
        <CardsModal />
      </DashboardLayout>
    </>
  );
}

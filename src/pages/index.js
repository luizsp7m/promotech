import { Fragment } from "react";

import Header from "../components/Header";
import MainGrid from "../components/MainGrid";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Promotech | Início</title>
      </Head>

      <Header />
      <MainGrid />
    </Fragment>
  )
}

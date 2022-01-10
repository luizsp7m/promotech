import { Fragment, useContext, useEffect } from "react";

import Header from "../components/Header";
import PostGird from "../components/PostGrid";
import Head from "next/head";

import { useRouter } from 'next/router'

import { AuthContext } from '../contexts/AuthContext';

export default function Post() {
  const { user, loadingUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loadingUser && !user) {
      router.push('/');
    }
  }, [loadingUser, user]);

  return (
    <Fragment>
      <Head>
        <title>Promotech | Adicionar produto</title>
      </Head>

      <Header />
      <PostGird />
    </Fragment>
  );
}
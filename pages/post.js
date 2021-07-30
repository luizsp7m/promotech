import { Fragment, useContext, useEffect } from "react";

import Header from "../src/components/Header";
import PostGird from "../src/components/PostGrid";

import { useRouter } from 'next/router'

import { AuthContext } from '../src/contexts/AuthContext';

export default function Post() {
  const { user, loadingUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if(!loadingUser && !user) {
      router.push('/');
    }
    console.log(loadingUser, user);
  }, [loadingUser, user]);

  return (
    <Fragment>
      <Header />
      <PostGird />
    </Fragment>
  );
}
import { Fragment, useContext } from "react";

import Header from "../src/components/Header";
import PostGird from "../src/components/PostGrid";

import { AuthContext } from '../src/contexts/AuthContext';

export default function Post() {
  const { teste } = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <PostGird />
    </Fragment>
  );
}
import { Fragment } from "react";

import Header from "../src/components/Header";
import PostGird from "../src/components/PostGrid";

export default function Post() {
  return (
    <Fragment>
      <Header />
      <PostGird />
    </Fragment>
  );
}
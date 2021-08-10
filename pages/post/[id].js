import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { database } from '../../src/services/firebase';
import axios from 'axios';

import { AuthContext } from '../../src/contexts/AuthContext';

import Header from "../../src/components/Header";
import PostGird from "../../src/components/PostGrid";

export default function Post({ post }) {
  const router = useRouter();
  
  const { user, loadingUser } = useContext(AuthContext);

  useEffect(() => {
    if (!loadingUser && !user ||
      !loadingUser && post.user.id !== user.id
    ) {
      router.push('/');
    }
  }, [loadingUser, user]);

  return (
    <Fragment>
      {!post ? (
        <>
          <Header />
          <h3>ID não encontrado</h3>
        </>
      ) : (
        <>
          <Header />
          <PostGird post={post} />
        </>
      )}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  let post = null;

  const postId = context.params.id;

  const postRef = database.ref('posts/' + postId);

  postRef.on('value', snapshot => {
    post = snapshot.val();
  });

  return {
    props: {
      post
    },
  }
}
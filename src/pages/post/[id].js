import { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { database } from '../../services/firebase';

import Head from "next/head";

import { AuthContext } from '../../contexts/AuthContext';

import Header from "../../components/Header";
import PostGird from "../../components/PostGrid";

export default function Post() {
  const router = useRouter();

  const { user, loadingUser } = useContext(AuthContext);

  const [post, setPost] = useState(null);

  async function getPostInformation() {
    const postId = await router.query.id;
    const postRef = await database.ref('posts/' + postId);
    await postRef.on('value', snapshot => {
      setPost(snapshot.val());
    });
  }

  useEffect(() => {
    getPostInformation();
  }, [router.query.id]);

  useEffect(() => {
    if (!loadingUser && !user) {
      router.push('/');
    }

    if (post) {
      if (!loadingUser && user)
        if (post.user.id !== user.id)
          router.push('/');
    }

  }, [loadingUser, user, post]);

  return (
    <Fragment>
      <Head>
        <title>Promotech | Atualizar produto</title>
      </Head>

      <Header />
      {post && <PostGird post={post} />}
    </Fragment>
  );
}
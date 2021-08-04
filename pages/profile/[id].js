import { Fragment, useEffect, useState } from "react";

import styled from 'styled-components';

import Header from '../../src/components/Header';

import { useAuth } from '../../src/hooks/useAuth';

import { usePost } from '../../src/hooks/usePost';

import Card from '../../src/components/Card';

import MainGrid from '../../src/components/MainGrid';

import { useRouter } from 'next/router';

import { posts } from '../../src/hooks/usePost';

const Container = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url("https://images.wallpaperscraft.com/image/hologram_scheme_scifi_139294_1920x1080.jpg");
`

const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.25rem 0;

  display: flex;
  align-items: center;
  gap: 1.55rem;

  color: ${props => props.theme.colors.textPrimaryColor};

  > img {
    border-radius: 50%;
    max-width: 10rem;
  }

  h5 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  span {
    font-size: 1.35rem;
  }
`

export default function Profile() {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState();
  const [postCount, setPostCount] = useState(0);

  const { posts } = usePost();

  

  useEffect(() => {
    let i = 0;

    posts.map(post => {
      if(router.query.id === post.user.id) {
        setUserProfile(post.user);
        i = i + 1;
      }
    });

    setPostCount(i);
  }, [posts]);

  return (
    <Fragment>
      <Header />
      { userProfile ? (
        <>
          <Container>
            <Wrapper>
              <img src={userProfile.avatar} />

              <div>
                <h5>{userProfile.name}</h5>
                <span>{postCount} { postCount === 1 ? 'publicação' : 'publicações' }</span>
              </div>
            </Wrapper>
          </Container>

          <MainGrid user={router.query.id} />
        </>
      ) : (
        <h3 style={{
          padding: '2rem',
          textAlign: 'center',
        }}>Usuário não existe</h3>
      )}
    </Fragment>
  );
}
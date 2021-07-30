import { Fragment } from "react";

import styled from 'styled-components';

import Header from '../../src/components/Header';

import { useAuth } from '../../src/hooks/useAuth';

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
  const { user, loadingUser } = useAuth();

  return (
    <Fragment>
      <Header />
      { !loadingUser && (
        <Container>
          <Wrapper>
            <img src={user.avatar} />

            <div>
              <h5>{ user.name }</h5>
              <span>5 publicações</span>
            </div>
          </Wrapper>
        </Container>
      )}
    </Fragment>
  );
}
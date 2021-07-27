import { Container, Wrapper } from "./styles";

import { FcGoogle } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa';

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useRouter } from 'next/router'

export default function Header() {
  const { signInWithGoogle, user } = useContext(AuthContext);

  const router = useRouter();

  function createNewPost() {
    router.push('/post');
  }

  return (
    <Container>
      <Wrapper>
        <h4 onClick={() => router.push('/')}>Promotech</h4>

        <div>
          {!user && (
            <button className="login-btn" onClick={signInWithGoogle}>
              <FcGoogle size={'14'} />
              <span>Sing In</span>
            </button>
          )}

          {user && (
            <div className="profile">
              <img src={user.avatar} />
              <span>{user.name}</span>
            </div>
          )}

          <button className="create-btn" onClick={createNewPost}>
            <FaPlus size={'14'} />
            <span>Enviar</span>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}
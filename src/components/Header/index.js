import { Container, Wrapper } from "./styles";

import { FcGoogle } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h4>Promotech</h4>

        <div>
          <button className="login-btn">
            <FcGoogle size={'14'} />
            <span>Sing In</span>
          </button>

          <button className="create-btn">
            <FaPlus size={'14'} />
            <span>Enviar</span>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}
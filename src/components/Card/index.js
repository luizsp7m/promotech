import { Container, Image, About } from './styles';

import { FiExternalLink } from 'react-icons/fi';

export default function Card({ post }) {
  return (
    <Container>
      <Image>
        <img src={post.productImage} />
      </Image>

      <About>
        <h5 className="title">{post.title}</h5>

        <div>
          <h4>R$ {post.price}</h4>
          <span>Vendido por <label>Amazon</label></span>
        </div>

        <p>{post.description}</p>

        <div className="footer">
          <div className="user">
            <img src="https://i.imgur.com/52qKUp1_d.webp?maxwidth=760&fidelity=grand" />
            <span>Nome de quem postou</span>
          </div>

          <button>
            <FiExternalLink size={'16'} />
            <span>Pegar promoção</span>
          </button>
        </div>
      </About>
    </Container>
  )
}
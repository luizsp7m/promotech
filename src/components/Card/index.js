import { Container, Image, About } from './styles';

import { FiExternalLink } from 'react-icons/fi';

import { useRouter } from 'next/router';

import imgDefault from '../../assets/default.jpg';

export default function Card({ post, page }) {
  const router = useRouter();

  return (
    <Container>
      <Image>
        <img src={post.productImage ? post.productImage : imgDefault.src} />
      </Image>

      <About>
        <h5 className="title">{post.title}</h5>

        <div>
          <h4>R$ {post.price}</h4>
          {/* <span>Vendido por <label>Amazon</label></span> */}
        </div>

        <p>{post.description}</p>

        <div className="footer">
          <div className="user">
            <img src={post.user.avatar} />
            {page === 'post' ? (
              <span>{post.user.name}</span>
            ) : (
              <span onClick={() => router.push(`/profile/${post.user.id}`)}>
                {post.user.name}
              </span>
            )}
          </div>

          {page === 'post' ? (
            <button>
              <FiExternalLink size={'16'} />
              <span>Pegar promoção</span>
            </button>
          ) : (
            <button>
              <FiExternalLink size={'16'} />
              <span>Pegar promoção</span>
            </button>
          )}
        </div>
      </About>
    </Container>
  )
}
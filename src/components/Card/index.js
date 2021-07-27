import { Container, Image, About } from './styles';

import { FiExternalLink } from 'react-icons/fi';

export default function Card() {
  return (
    <Container>
      <Image>
        <img src="https://images1.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg" />
      </Image>

      <About>
        <h5 className="title">Título da postagem</h5>

        <div>
          <h4>R$ 50,00</h4>
          <span>Vendido por <label>Amazon</label></span>
        </div>

        <p>- Marca: AMD - Modelo: 100-100000065BOX</p>

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
import Card from '../Card';

import { Container, Wrapper, Form } from './styles';

export default function PostGird() {
  async function getImages() {
    const images = await fetch('http://localhost:3000/api/getImages')
      .then(response => { return response.json() })
      .then(response => { return response })
      .catch(error => { return error.json() });

    console.log(images);
  }

  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'form' }}>
          <Form>
            <form>
              <div className="input-group">
                <span>Link do produto</span>
                <input type="text" />
                <button onClick={getImages}>Carregar Imagens</button>
              </div>

              <div className="input-group">
                <span>Categoria</span>
                <input type="text" />
              </div>

              <div className="input-group">
                <span>Título</span>
                <input type="text" />
              </div>

              <div className="input-group">
                <span>Preço</span>
                <input type="text" />
              </div>

              <div className="input-group">
                <span>Descrição</span>
                <input type="text" />
              </div>

              <button type="submit">Enviar</button>
            </form>
          </Form>
        </div>

        <div>
          <h4>Pré-visualização</h4>
          <Card />
        </div>
      </Wrapper>
    </Container>
  );
}
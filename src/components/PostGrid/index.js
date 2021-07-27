import { useState } from 'react';
import Card from '../Card';

import { Container, Wrapper, Form } from './styles';

export default function PostGird() {
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  async function getImages() {
    setLoadingImages(true);
    setImages([]);

    await fetch('http://localhost:3000/api/getImages')
      .then(response => {
        return response.json()
      })
      .then(response => {
        setImages(response);
        setLoadingImages(false);
      })
      .catch(error => {
        return error.json()
      });
  }

  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'form', overflowX: 'auto' }}>
          <Form>
            <form onSubmit={e => e.preventDefault()}>
              <div className="input-group">
                <span>Link do produto</span>
                <input type="text" />

                {loadingImages && <h5>Carregando...</h5>}

                <div className="wrapper-images">
                  { images.map((image, index) => (
                    <img 
                      key={index}
                      src={image.src} 
                      onClick={() => setSelectedImage(image)}
                      className={image === selectedImage ? 'selected' : ''}
                    />
                  )) }
                </div>

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
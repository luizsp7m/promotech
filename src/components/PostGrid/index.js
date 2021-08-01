import { useState } from 'react';

import Card from '../Card';

import { Container, Wrapper, Form } from './styles';

import { useCategory } from '../../hooks/useCategory';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { useRouter } from 'next/router';

import axios from 'axios';

export default function PostGird() {
  const [images, setImages] = useState();
  const [loadingImages, setLoadingImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const [productLink, setProductLink] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const { categories, loadingCategories } = useCategory();

  const { user } = useAuth();

  const router = useRouter();

  async function getImages() {
    setLoadingImages(true);
    const images = await axios.get('https://promotech.vercel.app/api/getImages');
    setImages(images.data);
    setLoadingImages(false);
  }

  async function createPost(event) {
    event.preventDefault();

    const postRef = database.ref('posts');

    const firebasePost = await postRef.push({
      title: title,
      productLink: productLink,
      productImage: 'https://images2.kabum.com.br/produtos/fotos/81132/81132_index_gg.jpg',
      price: price,
      description: description,
      category: category,
      user: user,
    });

    router.push('/');
  }

  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'form', overflowX: 'auto' }}>
          <Form>
            <form onSubmit={createPost}>
              <div className="input-group">
                <span>Link do produto</span>
                <input
                  type="text"
                  onChange={event => setProductLink(event.target.value)}
                  value={productLink}
                />

                { loadingImages && <h4>Carregando imagens</h4> }

                {images && (
                  <div className="wrapper-images">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        onClick={() => setSelectedImage(image)}
                        className={image === selectedImage ? 'selected' : ''}
                      />
                    ))}
                  </div>
                )}

                <span className="button" onClick={getImages}>Carregar Imagens</span>
              </div>

              {!loadingCategories && (
                <div className="input-group">
                  <span>Categoria</span>

                  <select
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                  >
                    {categories.map(category => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="input-group">
                <span>Título</span>
                <input
                  type="text"
                  onChange={event => setTitle(event.target.value)}
                  value={title}
                />
              </div>

              <div className="input-group">
                <span>Preço</span>
                <input
                  type="text"
                  onChange={event => setPrice(event.target.value)}
                  value={price}
                />
              </div>

              <div className="input-group">
                <span>Descrição</span>
                <input
                  type="text"
                  onChange={event => setDescription(event.target.value)}
                  value={description}
                />
              </div>

              <button type="submit">Enviar</button>
            </form>
          </Form>
        </div>

        <div>
          <h4>Pré-visualização</h4>
          {/* <Card /> */}
        </div>
      </Wrapper>
    </Container>
  );
}
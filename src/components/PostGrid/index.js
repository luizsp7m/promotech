import { useEffect, useState } from 'react';

import Card from '../Card';

import { Container, Wrapper, Form } from './styles';

import { useCategory } from '../../hooks/useCategory';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { useRouter } from 'next/router';

import { validateURL } from '../../utils/utils';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostGird() {
  const [productLink, setProductLink] = useState('');
  const [productImage, setProductImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const { categories, loadingCategories } = useCategory();

  const { user } = useAuth();

  const router = useRouter();

  const notify = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  }

  const data = {
    title: title,
    productLink: productLink,
    productImage: productImage,
    price: price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    description: description,
    category: category,
    user: user,
  }

  async function createPost(event) {
    event.preventDefault();

    if (!validateURL(productLink)) {
      notify("Digite uma URL válida para o produto");
      return;
    }

    if (!validateURL(productImage)) {
      notify("Digite uma URL válida para a imagem");
      return;
    }

    const postRef = database.ref('posts');

    const firebasePost = await postRef.push(data);

    router.push('/');
  }

  useEffect(() => {
    if (!loadingCategories) {
      setCategory(categories[0].id);
    }
  }, [loadingCategories]);

  return (
    <Container>
      <ToastContainer style={{ fontSize: '1.4rem' }} />
      <Wrapper>
        <div style={{ gridArea: 'form', overflowX: 'auto' }}>
          <Form>
            <form onSubmit={createPost}>
              <div className="input-group">
                <span>Produto URL</span>
                <input
                  type="text"
                  onChange={event => setProductLink(event.target.value)}
                  value={productLink}
                  required
                />
              </div>

              <div className="input-group">
                <span>Imagem URL</span>
                <input
                  type="text"
                  onChange={event => setProductImage(event.target.value)}
                  value={productImage}
                  required
                />
              </div>

              {!loadingCategories && (
                <div className="input-group">
                  <span>Categoria</span>

                  <select
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                    required
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
                  required
                />
              </div>

              <div className="input-group">
                <span>Preço</span>
                <input
                  type="number"
                  onChange={event => setPrice(event.target.value)}
                  value={price}
                  required
                />
              </div>

              <div className="input-group">
                <span>Descrição</span>
                <input
                  type="text"
                  onChange={event => setDescription(event.target.value)}
                  value={description}
                  required
                />
              </div>

              <button type="submit">Enviar</button>
            </form>
          </Form>
        </div>

        <div>
          <h4>Pré-visualização</h4>
          { user && <Card post={data} page={'post'} /> }
        </div>
      </Wrapper>
    </Container>
  );
}
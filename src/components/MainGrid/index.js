import { Container, Wrapper } from "./styles";

import Categories from '../Categories';
import Card from "../Card";

import { usePost } from '../../hooks/usePost';

export default function MainGrid() {

  const { postsFiltered, loadingPosts } = usePost();

  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'categories' }}>
          <Categories />
        </div>

        <div>
          { !loadingPosts && (
            postsFiltered.map(post => (
              <Card
                post={post}
                key={post.id}
              />
            ))
          ) }
        </div>
      </Wrapper>
    </Container>
  )
}
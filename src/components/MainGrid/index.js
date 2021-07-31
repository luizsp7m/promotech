import { Container, Wrapper } from "./styles";

import Categories from '../Categories';
import Card from "../Card";

import { usePost } from '../../hooks/usePost';
import { useCategory } from "../../hooks/useCategory";

export default function MainGrid({ user }) {
  const { posts } = usePost();
  const { selectedCategory } = useCategory();

  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'categories' }}>
          <Categories />
        </div>

        <div>
          {user ? (
            posts.map(post => !selectedCategory && post.user.id === user ? (
              <Card key={post.id} post={post} />
            ) : (
              post.category === selectedCategory && post.user.id === user &&
              <Card key={post.id} post={post} />
            ))
          ) : (
            posts.map(post => !selectedCategory ? (
              <Card key={post.id} post={post} />
            ) : (
              post.category === selectedCategory && <Card key={post.id} post={post} />
            ))
          )}
        </div>
      </Wrapper>
    </Container>
  )
}
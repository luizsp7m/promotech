import { Container, Wrapper } from "./styles";

import Categories from '../Categories';
import Card from "../Card";

export default function MainGrid() {
  return (
    <Container>
      <Wrapper>
        <div style={{ gridArea: 'categories' }}>
          <Categories />
        </div>

        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Wrapper>
    </Container>
  )
}
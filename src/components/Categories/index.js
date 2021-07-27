import { useState } from "react";
import { Container } from "./styles";

export default function Categories() {
  const categories = [{
    id: 0,
    name: 'Processador'
  }, {
    id: 1,
    name: 'Placa de vídeo'
  }, {
    id: 2,
    name: 'Memória RAM'
  }, {
    id: 3,
    name: 'Placa-mãe'
  }];

  const [selected, setSelected] = useState();

  return (
    <Container>
      { categories.map(category => {
        return (
          <span
            key={category.id}
            onClick={() => setSelected(category.id)}
            className={category.id === selected ? 'selected' : ''}
          >{ category.name }</span>
        )
      }) }
    </Container>
  )
}
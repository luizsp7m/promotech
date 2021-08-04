import { useCategory } from "../../hooks/useCategory";
import { Container, Wrapper } from "./styles";

export default function Categories() {
  const {
    categories,
    loadingCategories,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  return (
    <Wrapper>
      { !loadingCategories && (
        <Container>
          { categories.map(category => (
            <span
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={category.id === selectedCategory ? 'selected' : ''}
            >
              {category.name}
            </span>
          ))}
        </Container>
      )}

      { selectedCategory && <button
        onClick={() => setSelectedCategory()}
      >
        Remover filtro
      </button>}
    </Wrapper>
  )
}
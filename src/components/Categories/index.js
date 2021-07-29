import { Fragment } from "react";
import { useCategory } from "../../hooks/useCategory";
import { Container } from "./styles";

export default function Categories() {
  const {
    categories,
    loadingCategories,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  return (
    <Fragment>
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
    </Fragment>
  )
}
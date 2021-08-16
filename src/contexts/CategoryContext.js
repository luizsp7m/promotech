import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();

  async function getCategories() {
    const token = process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY;
    setLoadingCategories(true);

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: '{ allCategories { id name _firstPublishedAt } }'
      }),
    }
    )
      .then(res => res.json())
      .then((res) => {
        setCategories(res.data.allCategories);
        setLoadingCategories(false);
      })
      .catch((error) => {
        console.log(`Category Error: ${error}`);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{
      categories,
      loadingCategories,
      selectedCategory,
      setSelectedCategory,
    }}>
      { children}
    </CategoryContext.Provider>
  );
}